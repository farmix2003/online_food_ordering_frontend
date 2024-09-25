import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        homeMsg:
          "Discover the best local food from your favorite restaurants and cafes. Book your meals and enjoy free delivery.",
        topMeals: "Top Meals",
        restaurantsMsg: "Order Foods From Our Handepicked Favourites",
      },
    },
    tr: {
      translation: {
        homeMsg:
          "Favori restoranlar ve cafelerimizdeki en iyi yerel yiyecekleri keşfet ve sipariş verin. Hemen siparişlerinizin ücretsiz teslimati elde edin.",
        topMeals: "Yerel yiyecekler",
        restaurantsMsg: "Yerel Yiyeceklerimizde Sipariş Ver",
      },
    },
  },
});

export default i18next;
