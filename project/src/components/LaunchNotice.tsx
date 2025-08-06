import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Gift, Infinity } from 'lucide-react';

const LaunchNotice: React.FC = () => {
  const { t } = useTranslation();

  const benefits = t('earlyAccess.notice.benefits', { returnObjects: true }) as string[];
  const safeBenefits = Array.isArray(benefits) ? benefits : [];

  const icons = [Calendar, Gift, Infinity];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-emerald-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('earlyAccess.notice.headline')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('earlyAccess.notice.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {safeBenefits.map((benefit, index) => {
              const Icon = icons[index] || Calendar;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchNotice;