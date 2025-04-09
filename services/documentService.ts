import { useI18n } from "vue-i18n";

export interface Document {
  id: string;
  mimeType: string;
  extension?: string;
  fileName: string;
  fileSize?: number | null;
  description?: string | null;
  type?: string;
  title?: string;
  displayName?: string;
  documentLang?: string;
  localizedTitle?: string;
  localizedDescription?: string;
}

// Локальные данные документов на случай, если API недоступен
const localDocuments: Document[] = [
  {
    id: "fac56922-3a86-4db3-ae36-971e06eb0f1d",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "agreement_eng.pdf",
    fileSize: null,
    description: null,
    type: "agreement",
  },
  {
    id: "8b9b897e-cb69-45f8-be2f-7a3bef7e42d8",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "agreement_ru.pdf",
    fileSize: null,
    description: null,
    type: "agreement",
  },
  {
    id: "c76f9caa-123e-479f-b7bf-1ff81976290d",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "privacy_policy_eng.pdf",
    fileSize: null,
    description: null,
    type: "privacy_policy",
  },
  {
    id: "922d4718-6d5b-4cf8-87ee-a85ec275a26b",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "privacy_policy_ru.pdf",
    fileSize: null,
    description: null,
    type: "privacy_policy",
  },
  {
    id: "c638d9a1-bc94-4422-9b38-f730dba4b492",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "public_offer_eng.pdf",
    fileSize: null,
    description: null,
    type: "public_offer",
  },
  {
    id: "2a8055aa-e22c-4a7d-ab45-ec040b5b69a9",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "public_offer_ru.pdf",
    fileSize: null,
    description: null,
    type: "public_offer",
  },
  {
    id: "d82f8e1a-5c3f-4b2c-9a1e-7f6a8d9b0c4d",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "personal_data_eng.pdf",
    fileSize: null,
    description: null,
    type: "personal_data",
  },
  {
    id: "e93f9d2b-6a4e-5c3d-8b2f-9g7h6j5k4l3m",
    mimeType: "application/pdf",
    extension: ".pdf",
    fileName: "personal_data_ru.pdf",
    fileSize: null,
    description: null,
    type: "personal_data",
  },
];

// Карта соответствия типов документов их идентификаторам для разных языков
const documentMap: Record<string, Record<string, string>> = {
  agreement: {
    en: "fac56922-3a86-4db3-ae36-971e06eb0f1d",
    ru: "8b9b897e-cb69-45f8-be2f-7a3bef7e42d8",
    kk: "8b9b897e-cb69-45f8-be2f-7a3bef7e42d8", // Используем русский как запасной вариант для казахского
  },
  privacy_policy: {
    en: "c76f9caa-123e-479f-b7bf-1ff81976290d",
    ru: "922d4718-6d5b-4cf8-87ee-a85ec275a26b",
    kk: "922d4718-6d5b-4cf8-87ee-a85ec275a26b",
  },
  public_offer: {
    en: "c638d9a1-bc94-4422-9b38-f730dba4b492",
    ru: "2a8055aa-e22c-4a7d-ab45-ec040b5b69a9",
    kk: "2a8055aa-e22c-4a7d-ab45-ec040b5b69a9",
  },
  personal_data: {
    en: "d82f8e1a-5c3f-4b2c-9a1e-7f6a8d9b0c4d",
    ru: "e93f9d2b-6a4e-5c3d-8b2f-9g7h6j5k4l3m",
    kk: "e93f9d2b-6a4e-5c3d-8b2f-9g7h6j5k4l3m",
  },
};

/**
 * REST клиент для работы с API документов
 */
class DocumentApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "https://stage-platform.coube.kz/api/v1") {
    this.baseUrl = baseUrl;
  }

  /**
   * Получить все документы с сервера
   */
  async fetchAllDocuments(): Promise<Document[]> {
    try {
      const response = await fetch(`${this.baseUrl}/files/instructions`);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      return (await response.json()) as Document[];
    } catch (error) {
      console.error("Ошибка при загрузке документов:", error);
      throw error;
    }
  }

  /**
   * Получить URL для скачивания документа
   */
  getDownloadUrl(id: string): string {
    return `${this.baseUrl}/files/preview/${id}`;
  }
}

/**
 * Сервис для работы с документами
 */
export function useDocumentService() {
  const { locale } = useI18n();
  const apiClient = new DocumentApiClient();

  // Кеш документов
  let documentsCache: Document[] | null = null;

  /**
   * Получить все документы
   * @returns Promise<Document[]>
   */
  const getAllDocuments = async (): Promise<Document[]> => {
    try {
      // Используем кеш если он есть
      if (documentsCache) {
        return documentsCache;
      }

      // Попытка получить данные с бэкенда
      const data = await apiClient.fetchAllDocuments();

      // Обработка данных с сервера - определение типа документа на основе имени файла
      const processedData = data.map((doc) => {
        const fileName = doc.fileName.toLowerCase();
        let type = undefined;

        if (fileName.includes("agreement")) {
          type = "agreement";
        } else if (fileName.includes("privacy")) {
          type = "privacy_policy";
        } else if (fileName.includes("offer") || fileName.includes("oferta")) {
          type = "public_offer";
        } else if (fileName.includes("personal") || fileName.includes("data")) {
          type = "personal_data";
        }

        return {
          ...doc,
          type,
        };
      });

      // Сохраняем в кеш
      documentsCache = processedData;
      return processedData;
    } catch (error) {
      console.warn(
        "Failed to fetch documents from API, using local data",
        error
      );
      // Используем локальные данные как запасной вариант
      documentsCache = localDocuments;
      return localDocuments;
    }
  };

  /**
   * Получить документ по типу
   * @param type Тип документа
   * @returns Promise<Document | undefined>
   */
  const getDocumentByType = async (
    type: string
  ): Promise<Document | undefined> => {
    const documents = await getAllDocuments();
    const currentLocale = locale.value;

    // Ищем документ для текущего языка
    let doc = documents.find(
      (d) =>
        d.type === type &&
        d.fileName.toLowerCase().includes(currentLocale.toLowerCase())
    );

    // Если не найден, ищем документ на английском
    if (!doc && currentLocale !== "en") {
      doc = documents.find(
        (d) => d.type === type && d.fileName.toLowerCase().includes("eng")
      );
    }

    // Если и на английском не найден, берем любой с этим типом
    if (!doc) {
      doc = documents.find((d) => d.type === type);
    }

    return doc;
  };

  /**
   * Получить URL для скачивания документа
   * @param id ID документа
   * @returns string
   */
  const getDocumentDownloadUrl = (id: string): string => {
    return apiClient.getDownloadUrl(id);
  };

  /**
   * Получить ссылку на документ по типу
   * @param type Тип документа
   * @returns string
   */
  const getDocumentLinkByType = (type: string): string => {
    const currentLocale = locale.value as keyof (typeof documentMap)[string];
    // Получаем ID документа для текущего языка или используем английский как запасной вариант
    const documentId =
      documentMap[type]?.[currentLocale] || documentMap[type]?.["en"];

    if (!documentId) {
      console.error(
        `Document ID not found for type: ${type} and locale: ${currentLocale}`
      );
      return "";
    }

    return getDocumentDownloadUrl(documentId);
  };

  /**
   * Инвалидировать кеш документов,
   * заставит следующий вызов getAllDocuments загрузить свежие данные
   */
  const invalidateCache = (): void => {
    documentsCache = null;
  };

  return {
    getAllDocuments,
    getDocumentByType,
    getDocumentDownloadUrl,
    getDocumentLinkByType,
    invalidateCache,
  };
}
