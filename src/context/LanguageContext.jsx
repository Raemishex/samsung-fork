import React, { createContext, useContext, useState, useEffect } from 'react';

// Tərcümə bazası (Dictionaries)
const translations = {
  az: {
    nav: {
      shop: 'Mağaza',
      mobile: 'Mobil',
      tvav: 'TV və AV',
      appliances: 'Məişət texnikası',
      computersmonitors: 'Kompüter və Monitorlar',
      wearables: 'Geyilə bilən',
      audio: 'Audio',
      accessories: 'Aksesuarlar',
      smartthings: 'SmartThings',
      support: 'Dəstək',
      forBusiness: 'Biznes üçün',
      features: 'Xüsusiyyətlər',
      compare: 'Müqayisə et',
      offers: 'Təkliflər'
    },
    hero: {
      title: 'Galaxy S26 Ultra',
      subtitle: 'Ən yeni Galaxy seriyası ilə tanış olun',
      preorder: 'İndi sifariş et',
      learnMore: 'Daha ətraflı'
    },
    compare: {
      title: 'Fərqi Özün Gör (Before / After)',
      description: 'ProVisual mühərriki ilə gecə çəkilişləri və rəng dəqiqliyi.'
    },
    footer: {
      copyright: 'Copyright© 1995-2024 SAMSUNG. Bütün hüquqlar qorunur.',
      privacy: 'Məxfilik Siyasəti',
      terms: 'İstifadə Şərtləri',
      contact: 'Bizimlə Əlaqə'
    },
    cart: {
      title: 'Səbətiniz',
      empty: 'Səbətiniz boşdur',
      checkout: 'Ödəmə',
      subtotal: 'Cəmi',
      applyPromo: 'Tətbiq et',
      promoPlaceholder: 'Promo kod daxil edin'
    },
    search: {
      placeholder: 'Axtarış...',
      aiSuggest: 'Süni İntellekt Tövsiyələri',
      recent: 'Son axtarışlar',
      popular: 'Populyar axtarışlar'
    }
  },
  en: {
    nav: {
      shop: 'Shop',
      mobile: 'Mobile',
      tvav: 'TV & AV',
      appliances: 'Appliances',
      computersmonitors: 'Computers & Monitors',
      wearables: 'Wearables',
      audio: 'Audio',
      accessories: 'Accessories',
      smartthings: 'SmartThings',
      support: 'Support',
      forBusiness: 'For Business',
      features: 'Features',
      compare: 'Compare',
      offers: 'Offers'
    },
    hero: {
      title: 'Galaxy S26 Ultra',
      subtitle: 'Meet the latest Galaxy series',
      preorder: 'Pre-order now',
      learnMore: 'Learn More'
    },
    compare: {
      title: 'See the Difference (Before / After)',
      description: 'Nightography and color accuracy with ProVisual Engine.'
    },
    footer: {
      copyright: 'Copyright© 1995-2024 SAMSUNG. All Rights Reserved.',
      privacy: 'Privacy',
      terms: 'Terms of Use',
      contact: 'Contact Us'
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty',
      checkout: 'Checkout',
      subtotal: 'Subtotal',
      applyPromo: 'Apply',
      promoPlaceholder: 'Enter promo code'
    },
    search: {
      placeholder: 'Search...',
      aiSuggest: 'AI Suggested Searches',
      recent: 'Recent Searches',
      popular: 'Popular Searches'
    }
  },
  ru: {
    nav: {
      shop: 'Магазин',
      mobile: 'Мобильные',
      tvav: 'ТВ и Аудио',
      appliances: 'Бытовая техника',
      computersmonitors: 'Компьютеры и Мониторы',
      wearables: 'Носимые',
      audio: 'Аудио',
      accessories: 'Аксессуары',
      smartthings: 'SmartThings',
      support: 'Поддержка',
      forBusiness: 'Для Бизнеса',
      features: 'Особенности',
      compare: 'Сравнить',
      offers: 'Предложения'
    },
    hero: {
      title: 'Galaxy S26 Ultra',
      subtitle: 'Встречайте новейшую серию Galaxy',
      preorder: 'Предзаказ сейчас',
      learnMore: 'Узнать больше'
    },
    compare: {
      title: 'Увидьте разницу (До / После)',
      description: 'Ночная съемка и точность цветопередачи с ProVisual Engine.'
    },
    footer: {
      copyright: 'Copyright© 1995-2024 SAMSUNG. Все права защищены.',
      privacy: 'Конфиденциальность',
      terms: 'Условия использования',
      contact: 'Связаться с нами'
    },
    cart: {
      title: 'Ваша корзина',
      empty: 'Ваша корзина пуста',
      checkout: 'Оформить заказ',
      subtotal: 'Итого',
      applyPromo: 'Применить',
      promoPlaceholder: 'Введите промокод'
    },
    search: {
      placeholder: 'Поиск...',
      aiSuggest: 'Рекомендации ИИ',
      recent: 'Недавние запросы',
      popular: 'Популярные запросы'
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLang = localStorage.getItem('samsung_lang');
      return savedLang ? savedLang : 'az'; // Default to Azerbaijani
    } catch (e) {
      return 'az';
    }
  });

  useEffect(() => {
    localStorage.setItem('samsung_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (section, key) => {
    return translations[language]?.[section]?.[key] || `${section}.${key}`;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
