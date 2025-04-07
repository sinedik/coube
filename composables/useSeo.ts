import { useI18n } from "vue-i18n";

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
        title: "COUBE — заказывайте грузоперевозки онлайн легко и быстро",
        description:
          "Размещайте заявки, выбирайте перевозчиков и отслеживайте грузы в реальном времени с COUBE.",
        h1: "Эффективное управление грузоперевозками с COUBE",
        h2: [
          "Как разместить заказ на платформе",
          "Контроль перевозки на каждом этапе",
          "Преимущества для заказчиков",
        ],
      },
      kz: {
        title: "COUBE — жүк тасымалдауға онлайн тапсырыс беру оңай және жылдам",
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
        title: "COUBE — Order Freight Transport Online Easily and Quickly",
        description:
          "Place requests, choose carriers, and track shipments in real-time with COUBE.",
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
        title: "COUBE — находите выгодные заказы на перевозки без посредников",
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
  };

  const getSeoConfig = (page: keyof typeof seoConfig) => {
    return seoConfig[page][
      locale.value as keyof (typeof seoConfig)[typeof page]
    ];
  };

  return {
    getSeoConfig,
  };
};
