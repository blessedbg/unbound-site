import i18n from '../i18n';

// Add any formatting utilities here
export const formatCurrency = (amount: number, locale?: string) => {
  const currentLocale = locale || i18n.language || 'en';
  return new Intl.NumberFormat(currentLocale, {
    style: 'currency',
    currency: currentLocale === 'es' ? 'EUR' : 'USD'
  }).format(amount);
};

export const formatDate = (date: Date, locale?: string) => {
  const currentLocale = locale || i18n.language || 'en';
  return new Intl.DateTimeFormat(currentLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};