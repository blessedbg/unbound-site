import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Heart, DollarSign, Clock } from 'lucide-react';

const FutureVision: React.FC = () => {
  const { t } = useTranslation();

  const stuckItems = t('futureVision.stuckItems', { returnObjects: true }) as string[] || [];
  const healedItems = t('futureVision.healedItems', { returnObjects: true }) as string[] || [];

  // Ensure arrays are always defined
  const safeStuckItems = Array.isArray(stuckItems) ? stuckItems : [];
  const safeHealedItems = Array.isArray(healedItems) ? healedItems : [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            {t('futureVision.headline')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Current State */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              {t('futureVision.stuckTitle')}
            </h3>
            <ul className="space-y-4">
              {safeStuckItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Future State */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-pink-200">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              {t('futureVision.healedTitle')}
            </h3>
            <ul className="space-y-4">
              {safeHealedItems.map((item, index) => {
                return (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Cost Section */}
        <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl shadow-lg p-10 text-center mb-12 border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {t('futureVision.costTitle')}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('futureVision.costDescription')}
          </p>
          <p className="text-2xl font-bold text-pink-600">
            {t('futureVision.costQuestion')}
          </p>
        </div>

        {/* Final Message */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-10 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white mb-4">
            {t('futureVision.futureMessage')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;