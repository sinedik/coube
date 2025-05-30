import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    phone: {
      display: "+7 707 467 83-36",
      raw: "77074678336",
    },
    email: {
      office: "office@coube.kz",
      general: "coube.kz@gmail.com",
    },
    website: {
      main: "https://coube.kz",
      platform: "https://platform.coube.kz",
    },
    social: {
      whatsapp: {
        group: "https://chat.whatsapp.com/DMfrOFSsMcQ2sBTMMCs3rv",
        direct: "https://wa.me/77074678336",
      },
      youtube: "https://youtube.com/@coube_logistics?si=Rl2ZXbAIr_oQditc",
      telegram: {
        channel: "https://t.me/coube_logistics_platform",
        contact: "https://t.me/coube_logistics",
        team: "https://vk.link/coube_team",
      },
      facebook: "https://facebook.com/coubekz",
      twitter: "https://x.com/coubekz",
      instagram: "https://www.instagram.com/coube.kz",
      tiktok: "https://www.tiktok.com/@coube.kz",
      vk: "https://vk.com/coube_kz",
      linkedin: "https://www.linkedin.com/company/coube/",
    },
    location: {
      google: "https://maps.app.goo.gl/epGuEaNohNqeMKTG7",
      yandex: "https://yandex.kz/maps/ru/-/CDwXEI8H",
      _2gis: "https://go.2gis.com/nbrkp",
    },
  }),
});
