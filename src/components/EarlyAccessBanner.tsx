import React from 'react';
import { useTranslation } from 'react-i18next';

const EarlyAccessBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-emerald-600 text-white text-sm py-1 text-center">
      <p className="font-medium">
        {t('earlyAccess.banner')}
      </p>
    </div>
  );
};

export default EarlyAccessBanner;