import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Heart } from 'lucide-react';

const Guarantee: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('guarantee.headline')}
          </h2>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 md:p-16 shadow-lg border border-green-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('guarantee.subtitle')}
            </h3>
          </div>

          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('guarantee.description')}
            </p>


            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('guarantee.noQuestions')}
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-700 italic font-medium text-lg">
                "{t('guarantee.quote')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;