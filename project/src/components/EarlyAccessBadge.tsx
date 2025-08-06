import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const EarlyAccessBadge: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-bold border border-emerald-200 shadow-lg">
      <Calendar className="w-4 h-4" />
      <span>{t('earlyAccess.badge')}</span>
    </div>
  );
};

export default EarlyAccessBadge;