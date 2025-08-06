import i18n from '../i18n';

export const updateSEOTags = () => {
  const lang = i18n.language;
  
  // Get translations
  const title = i18n.t('seo.title');
  const description = i18n.t('seo.description');
  
  // Update document title
  const titleElement = document.getElementById('page-title') as HTMLTitleElement;
  if (titleElement) {
    titleElement.textContent = title;
  } else {
    document.title = title;
  }
  
  // Update meta description
  const descElement = document.getElementById('page-description') as HTMLMetaElement;
  if (descElement) {
    descElement.content = description;
  }
  
  // Update Open Graph tags
  const ogTitleElement = document.getElementById('og-title') as HTMLMetaElement;
  if (ogTitleElement) {
    ogTitleElement.content = title;
  }
  
  const ogDescElement = document.getElementById('og-description') as HTMLMetaElement;
  if (ogDescElement) {
    ogDescElement.content = description;
  }
  
  // Update Twitter tags
  const twitterTitleElement = document.getElementById('twitter-title') as HTMLMetaElement;
  if (twitterTitleElement) {
    twitterTitleElement.content = title;
  }
  
  const twitterDescElement = document.getElementById('twitter-description') as HTMLMetaElement;
  if (twitterDescElement) {
    twitterDescElement.content = description;
  }
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
};

// Listen for language changes
i18n.on('languageChanged', updateSEOTags);