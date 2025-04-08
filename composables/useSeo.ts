import { useI18n } from "vue-i18n";

// Определяем типы страниц для типобезопасности
export type Page = "home" | "customer" | "driver" | "about" | "docs";

export type DocumentType = "agreement" | "privacy_policy" | "PUBLIC_OFFER";

export const useSeo = () => {
  const { locale } = useI18n();

  const seoConfig = {
    home: {
      ru: {
        title:
          "COUBE — цифровой агрегатор автомобильных грузоперевозок в Казахстане",
        description:
          "Упростите перевозки с COUBE: прямое взаимодействие между заказчиком и перевозчиком, онлайн-мониторинг и безопасные сделки.",
        h1: "COUBE — цифровой агрегатор автомобильных грузоперевозок в Казахстане",
        h2: "Преимущества использования COUBE",
        h3: [
          "Онлайн-мониторинг маршрута",
          "Подписание документов с ЭЦП",
          "Интеграция с 1С-бухгалтерией",
        ],
      },
      kz: {
        title:
          "COUBE — Қазақстандағы цифрлық автомобиль жүк тасымалдау агрегаторы",
        description:
          "COUBE көмегімен тасымалдауды жеңілдетіңіз: тапсырыс беруші мен тасымалдаушының тікелей байланысы, онлайн мониторинг және қауіпсіз мәмілелер.",
        h1: "COUBE — Қазақстандағы цифрлық автомобиль жүк тасымалдау агрегаторы",
        h2: "COUBE қолдану артықшылықтары",
        h3: [
          "Онлайн маршрут мониторингі",
          "ЭЦҚ арқылы құжаттарға қол қою",
          "1С-есепке алумен интеграция",
        ],
      },
      en: {
        title: "COUBE — Digital Road Freight Aggregator in Kazakhstan",
        description:
          "Simplify transportation with COUBE: direct interaction between clients and carriers, online monitoring, and secure transactions.",
        h1: "COUBE — Digital Road Freight Aggregator in Kazakhstan",
        h2: "Benefits of using COUBE",
        h3: [
          "Online route monitoring",
          "Digital signature for documents",
          "Integration with 1C accounting",
        ],
      },
    },
    customer: {
      ru: {
        title: "COUBE — Для грузоотправителей",
        description:
          "Найдите надежного перевозчика для вашего груза через платформу COUBE. Безопасные сделки и отслеживание в реальном времени.",
        h1: "Эффективное управление грузоперевозками с COUBE",
        h2: [
          "Как разместить заказ на платформе",
          "Контроль перевозки на каждом этапе",
          "Преимущества для заказчиков",
        ],
      },
      kz: {
        title: "COUBE — Жүк тасымалдауға онлайн тапсырыс беру оңай және жылдам",
        description:
          "COUBE арқылы тапсырыстар орналастырыңыз, тасымалдаушыларды таңдаңыз және жүктерді нақты уақытта бақылаңыз.",
        h1: "COUBE көмегімен жүк тасымалдауды тиімді басқару",
        h2: [
          "Платформада тапсырыс қалай орналастыру керек",
          "Тасымалдаудың әр кезеңінде бақылау",
          "Тапсырыс берушілерге арналған артықшылықтар",
        ],
      },
      en: {
        title: "COUBE — For Shippers",
        description:
          "Find a reliable carrier for your cargo through the COUBE platform. Secure transactions and real-time tracking.",
        h1: "Efficient Freight Transportation Management with COUBE",
        h2: [
          "How to place an order on the platform",
          "Control at every stage of transportation",
          "Benefits for customers",
        ],
      },
    },
    driver: {
      ru: {
        title: "COUBE — Для перевозчиков",
        description:
          "Получайте прямые заказы, используйте онлайн-мониторинг и подписывайте документы с ЭЦП через COUBE.",
        h1: "Новые возможности для перевозчиков с COUBE",
        h2: [
          "Как получить заказ через платформу",
          "Онлайн-подписание договоров",
          "Преимущества для перевозчиков",
        ],
      },
      kz: {
        title: "COUBE — делдалсыз тиімді тасымалдау тапсырыстарын табыңыз",
        description:
          "Тікелей тапсырыстар алыңыз, онлайн мониторингті қолданыңыз және COUBE арқылы ЭЦҚ арқылы құжаттарға қол қойыңыз.",
        h1: "COUBE көмегімен тасымалдаушыларға арналған жаңа мүмкіндіктер",
        h2: [
          "Платформа арқылы тапсырыс қалай алу керек",
          "Онлайн шарттарға қол қою",
          "Тасымалдаушыларға арналған артықшылықтар",
        ],
      },
      en: {
        title:
          "COUBE — Find Profitable Transport Orders Without Intermediaries",
        description:
          "Receive direct orders, use online monitoring, and sign documents with a digital signature through COUBE.",
        h1: "New Opportunities for Carriers with COUBE",
        h2: [
          "How to get an order through the platform",
          "Online contract signing",
          "Benefits for carriers",
        ],
      },
    },
    about: {
      ru: {
        title: "COUBE — О нас",
        description:
          "Узнайте, как COUBE упрощает процессы грузоперевозок с помощью технологий и инноваций.",
        h1: "О нас",
        h2: "Как мы упрощаем грузоперевозки",
        h3: ["Наши технологии", "Инновации в сфере логистики"],
      },
      kz: {
        title: "COUBE — Біз туралы",
        description:
          "COUBE технологиялар мен инновациялар көмегімен жүк тасымалдау процестерін қалай оңайлататынын біліңіз.",
        h1: "Біз туралы",
        h2: "Жүк тасымалдауды қалай оңайлатамыз",
        h3: ["Біздің технологияларымыз", "Логистика саласындағы инновациялар"],
      },
      en: {
        title: "COUBE — About Us",
        description:
          "Learn how COUBE simplifies the freight transportation process using technology and innovation.",
        h1: "About Us",
        h2: "How we simplify freight transportation",
        h3: ["Our technologies", "Innovations in logistics"],
      },
    },
    docs: {
      ru: {
        title: "COUBE — Документы и соглашения",
        description:
          "Соглашения, политика обработки данных и другие официальные документы COUBE.",
        h1: "Документы и соглашения",
        h2: "Официальные документы COUBE",
      },
      kz: {
        title: "COUBE — Құжаттар мен келісімдер",
        description:
          "COUBE келісімдері, деректерді өңдеу саясаты және басқа ресми құжаттар.",
        h1: "Құжаттар мен келісімдер",
        h2: "COUBE ресми құжаттары",
      },
      en: {
        title: "COUBE — Documents and Agreements",
        description:
          "Agreements, data processing policy, and other official COUBE documents.",
        h1: "Documents and Agreements",
        h2: "Official COUBE Documents",
      },
    },
  };

  const getSeoConfig = (page: Page) => {
    return seoConfig[page][locale.value];
  };

  const getSchemaOrg = (page: Page) => {
    // Базовая схема организации
    const baseOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "COUBE",
      url: "https://coube.kz",
      logo: "https://coube.kz/images/coube-logo.png",
      description: getSeoConfig(page).description,
      sameAs: [
        "https://facebook.com/coube",
        "https://instagram.com/coube.kz",
        "https://t.me/coube",
      ],
    };

    // Схемы для разных страниц
    const pageSchemas: Record<Page, any> = {
      home: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: getSeoConfig("home").title,
        url: "https://coube.kz",
        description: getSeoConfig("home").description,
        potentialAction: {
          "@type": "SearchAction",
          target: "https://coube.kz/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      customer: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Грузоперевозки",
        name: getSeoConfig("customer").title,
        description: getSeoConfig("customer").description,
        provider: baseOrg,
        areaServed: {
          "@type": "Country",
          name: "Казахстан",
        },
      },
      driver: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Поиск заказов для перевозчиков",
        name: getSeoConfig("driver").title,
        description: getSeoConfig("driver").description,
        provider: baseOrg,
        areaServed: {
          "@type": "Country",
          name: "Казахстан",
        },
      },
      about: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: getSeoConfig("about").title,
        description: getSeoConfig("about").description,
        publisher: baseOrg,
        mainEntity: baseOrg,
      },
      docs: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Документы COUBE",
        description: "Официальные документы и политики платформы COUBE",
        publisher: baseOrg,
      },
    };

    return pageSchemas[page];
  };

  // Функция для создания Open Graph тегов
  const getOpenGraphTags = (
    page: Page,
    seoConfig: { title: string; description: string }
  ) => {
    const baseUrl = "https://coube.kz";
    const pageUrl = page === "home" ? baseUrl : `${baseUrl}/${page}`;

    return [
      { property: "og:title", content: seoConfig.title },
      { property: "og:description", content: seoConfig.description },
      { property: "og:image", content: `${baseUrl}/images/coube-og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:site_name", content: "COUBE" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoConfig.title },
      { name: "twitter:description", content: seoConfig.description },
      {
        name: "twitter:image",
        content: `${baseUrl}/images/coube-og-image.jpg`,
      },
      { name: "twitter:site", content: "@coube_logistics" },
    ];
  };

  return {
    getSeoConfig,
    getSchemaOrg,
    getOpenGraphTags,
  };
};
