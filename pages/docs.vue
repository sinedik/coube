<template>
  <div class="docs-page">
    <div class="main-container">
      <section class="docs-section">
        <div class="container">
          <div class="docs-content">
            <h2 class="docs-title">{{ t("docsPage.title") }}</h2>
            <p class="docs-description">{{ t("docsPage.description") }}</p>

            <div v-if="loading" class="docs-loading">
              <div class="spinner"></div>
              <p>{{ t("common.loading") }}</p>
            </div>

            <div v-else-if="documents.length === 0" class="docs-empty">
              <p>{{ t("docsPage.noDocuments") }}</p>
            </div>

            <div v-else class="docs-list">
              <div
                v-for="doc in sortedDocuments"
                :key="doc.id"
                class="docs-item"
              >
                <div class="docs-item-icon">
                  <NuxtImg
                    src="/images/pdf.png"
                    alt="PDF документ"
                    class="pdf-icon"
                    format="webp"
                    quality="80"
                  />
                </div>
                <div class="docs-item-content">
                  <h3 class="docs-item-title">{{ getDocumentTitle(doc) }}</h3>
                  <p class="docs-item-description">
                    {{ getDocumentDescription(doc) }}
                  </p>
                </div>
                <div class="docs-item-actions">
                  <a
                    :href="getDocumentDownloadUrl(doc.id)"
                    target="_blank"
                    class="docs-item-button"
                  >
                    {{ t("docsPage.view") }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { type Document, useDocumentService } from "~/services/documentService";
import { useSeo } from "~/composables/useSeo";
import { useHead } from "nuxt/app";

const { locale, t } = useI18n();
const documentService = useDocumentService();
const { getSeoConfig } = useSeo();

// Состояние
const loading = ref(true);
const documents = ref<Document[]>([]);
const error = ref<string | null>(null);

// Преобразуем список документов для отображения
const sortedDocuments = computed(() => {
  // Текущий язык пользователя
  const currentLocale = locale.value;

  // Переводы документов (фиксированный набор)
  const documentTitles: Record<string, Record<string, string>> = {
    agreement: {
      ru: "Пользовательское соглашение",
      en: "User Agreement",
      kz: "Пайдаланушы келісімі",
    },
    privacy_policy: {
      ru: "Политика конфиденциальности",
      en: "Privacy Policy",
      kz: "Құпиялылық саясаты",
    },
    public_offer: {
      ru: "Публичная оферта",
      en: "Public Offer",
      kz: "Жария ұсыныс",
    },
    personal_data: {
      ru: "Согласие на обработку персональных данных",
      en: "Personal Data Processing Consent",
      kz: "Дербес деректерді өңдеуге келісім",
    },
  };

  // Переводы описаний
  const documentDescriptions: Record<string, Record<string, string>> = {
    agreement: {
      ru: "Правила использования платформы COUBE для заказчиков и перевозчиков",
      en: "Rules for using the COUBE platform for customers and carriers",
      kz: "Тапсырыс берушілер мен тасымалдаушылар үшін COUBE платформасын пайдалану ережелері",
    },
    privacy_policy: {
      ru: "Правила обработки и защиты персональных данных пользователей",
      en: "Rules for processing and protection of users' personal data",
      kz: "Пайдаланушылардың жеке деректерін өңдеу және қорғау ережелері",
    },
    public_offer: {
      ru: "Договор оферты для клиентов платформы COUBE",
      en: "Offer agreement for COUBE platform clients",
      kz: "COUBE платформасының клиенттері үшін ұсыныс келісімі",
    },
    personal_data: {
      ru: "Согласие на обработку персональных данных пользователей платформы",
      en: "Consent to the processing of personal data of platform users",
      kz: "Платформа пайдаланушыларының жеке деректерін өңдеуге келісім",
    },
  };

  // Сначала фильтруем документы только по текущему языку
  const filteredByLocale = documents.value.filter((doc) => {
    const fileName = doc.fileName.toLowerCase();

    // Проверяем соответствие имени файла текущему языку
    if (currentLocale === "ru" && fileName.includes("_ru")) {
      return true;
    } else if (currentLocale === "kz" && fileName.includes("_kz")) {
      return true;
    } else if (
      currentLocale === "en" &&
      (fileName.includes("_eng") || fileName.includes("_en"))
    ) {
      return true;
    }

    return false;
  });

  // Если после фильтрации документов не осталось, возвращаем все документы
  const docsToSort =
    filteredByLocale.length > 0 ? filteredByLocale : documents.value;

  // Приоритет документов по типу
  const priority = [
    "agreement",
    "privacy_policy",
    "public_offer",
    "personal_data",
  ];

  // Сортируем и добавляем переводы
  return docsToSort
    .sort((a, b) => {
      if (!a.type || !b.type) return 0;
      return priority.indexOf(a.type) - priority.indexOf(b.type);
    })
    .map((doc) => {
      // Добавляем локализованный заголовок и описание
      if (
        doc.type &&
        doc.type in documentTitles &&
        doc.type in documentDescriptions
      ) {
        const docType = doc.type;
        const localeKey =
          currentLocale as keyof (typeof documentTitles)[typeof docType];

        return {
          ...doc,
          localizedTitle:
            documentTitles[docType][localeKey] || getDocumentDisplayName(doc),
          localizedDescription: documentDescriptions[docType][localeKey] || "",
        };
      }
      return doc;
    });
});

// Получить заголовок документа
const getDocumentTitle = (doc: Document): string => {
  // Используем локализованный заголовок, если он есть
  if (doc.localizedTitle) {
    return doc.localizedTitle;
  }

  // Если тип неизвестен, используем имя файла
  return getDocumentDisplayName(doc);
};

// Получить описание документа
const getDocumentDescription = (doc: Document): string => {
  // Используем локализованное описание, если оно есть
  if (doc.localizedDescription) {
    return doc.localizedDescription;
  }

  return "";
};

// Получить отображаемое имя документа
const getDocumentDisplayName = (doc: Document): string => {
  // Если есть локализованное имя, используем его
  if (doc.displayName) {
    return doc.displayName;
  }

  // Определяем язык документа по имени файла
  const fileName = doc.fileName.toLowerCase();
  const currentLocale = locale.value;

  // Используем название документа без расширения и языкового суффикса
  let displayName = doc.fileName.replace(/\.[^.]+$/, ""); // Удаляем расширение

  // Заменяем подчеркивания на пробелы и делаем первую букву заглавной
  displayName = displayName
    .replace(/_/g, " ")
    .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());

  // Добавляем информацию о языке, если язык документа не совпадает с текущим
  if (
    (fileName.includes("_ru") && currentLocale !== "ru") ||
    (fileName.includes("_kz") && currentLocale !== "kz") ||
    ((fileName.includes("_eng") || fileName.includes("_en")) &&
      currentLocale !== "en")
  ) {
    const langSuffix = fileName.includes("_ru")
      ? t("common.languages.ru")
      : fileName.includes("_kz")
      ? t("common.languages.kz")
      : t("common.languages.en");

    displayName += ` (${langSuffix})`;
  }

  return displayName;
};

// Получить URL для скачивания документа
const getDocumentDownloadUrl = (id: string): string => {
  return documentService.getDocumentDownloadUrl(id);
};

// Инициализация
onMounted(async () => {
  try {
    // Получаем все документы
    const allDocs = await documentService.getAllDocuments();

    // Добавляем метаданные о типе и языке документа
    documents.value = allDocs.map((doc) => {
      const fileName = doc.fileName.toLowerCase();
      let documentLang = "";
      let type = doc.type;

      // Определяем язык документа из имени файла
      if (fileName.includes("_ru")) {
        documentLang = "ru";
      } else if (fileName.includes("_kz")) {
        documentLang = "kz";
      } else if (fileName.includes("_eng") || fileName.includes("_en")) {
        documentLang = "en";
      }

      // Определяем тип документа на основе имени файла
      if (!type) {
        if (fileName.includes("agreement")) {
          type = "agreement";
        } else if (fileName.includes("privacy_policy")) {
          type = "privacy_policy";
        } else if (
          fileName.includes("offer") ||
          fileName.includes("public_offer")
        ) {
          type = "public_offer";
        } else if (fileName.includes("personal") || fileName.includes("data")) {
          type = "personal_data";
        }
      }

      return {
        ...doc,
        type,
        documentLang,
      };
    });

    loading.value = false;
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err);
    loading.value = false;
  }
});

// SEO метаданные
const seo = getSeoConfig("docs");
useHead({
  title: seo.title,
  meta: [
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://coube.kz/docs" },
    { property: "og:image", content: "/images/coube-og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: "/images/coube-og-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://coube.kz/docs" }],
});
</script>

<style lang="scss" scoped>
.docs-page {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.main-container {
  width: 100%;
  max-width: 1440px;
  overflow-x: hidden;
}

.banner-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  margin-top: 40px;
  box-sizing: border-box;
  min-height: 320px;
  background-color: #1a237e;
}

.banner-content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
}

.banner-content {
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.banner-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  text-align: center;
}

.docs-section {
  padding: 80px 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

.docs-content {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.docs-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
}

.docs-description {
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 40px;
}

.docs-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: #1a237e;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.docs-empty {
  text-align: center;
  padding: 60px 0;
  font-size: 18px;
  color: #555;
}

.docs-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.docs-item {
  background: #f4f4f4;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;

    .pdf-icon {
      transform: scale(1.1);
    }

    .docs-item-button {
      background-color: darken(#f19e22, 5%);
    }
  }
}

.docs-item-icon {
  margin-right: 20px;
  flex-shrink: 0;
}

.pdf-icon {
  width: 42px;
  height: 42px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.docs-item-content {
  max-width: 70%;
  flex: 1;
}

.docs-item-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.docs-item-description {
  font-size: 16px;
  color: #555;
  line-height: 1.4;
}

.docs-item-actions {
  display: flex;
  align-items: center;
}

.docs-item-button {
  background-color: #f19e22;
  color: #000;
  border: none;
  border-radius: 100px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: darken(#f19e22, 10%);
  }
}

@media (max-width: 768px) {
  .banner-section {
    margin-top: 0;
    min-height: 240px;
    border-radius: 0 0 24px 24px;
  }

  .banner-title {
    font-size: 32px;
  }

  .docs-section {
    padding: 40px 0;
  }

  .container {
    padding: 0 20px;
  }

  .docs-title {
    font-size: 28px;
  }

  .docs-description {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .docs-item {
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 10px;
  }

  .docs-item-icon {
    margin-right: 10px;
  }

  .pdf-icon {
    width: 32px;
    height: 32px;
  }

  .docs-item-content {
    max-width: 60%;
    margin-bottom: 0;
  }

  .docs-item-actions {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 28px;
  }

  .docs-title {
    font-size: 24px;
  }

  .container {
    padding: 0 16px;
  }

  .docs-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .docs-item-icon {
    margin-bottom: 15px;
  }

  .docs-item-content {
    max-width: 100%;
    margin-bottom: 15px;
  }

  .docs-item-actions {
    width: 100%;
  }

  .docs-item-button {
    width: 100%;
    text-align: center;
  }
}
</style>
