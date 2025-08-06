import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Zap, Shield, Heart } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="text-gray-800">{t('problem.headline.part1')}</span>
            <span className="text-pink-600 font-extrabold">{t('problem.headline.heart')}</span>
            <span className="text-gray-800">{t('problem.headline.part2')}</span>
            <span className="text-rose-600 font-extrabold">{t('problem.headline.wrongPeople')}</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('problem.subtitle.part1')}
            <span className="font-semibold text-pink-600">{t('problem.subtitle.intensity')}</span>
            {t('problem.subtitle.part2')}
            <span className="font-semibold text-rose-600">{t('problem.subtitle.chaos')}</span>
            {t('problem.subtitle.part3')}
          </p>
        </div>

        {/* Problem Cards - Stacked for Mobile, Grid for Desktop */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('problem.cards.overactiveAlarm.title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('problem.cards.overactiveAlarm.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('problem.cards.traumaBond.title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('problem.cards.traumaBond.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('problem.cards.safetyForeign.title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('problem.cards.safetyForeign.description')}</p>
          </div>
        </div>

        {/* Empathy Statement - Conversion Critical */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-12 text-center relative overflow-hidden shadow-lg border border-pink-100">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <p className="text-xl text-gray-700 italic leading-relaxed font-medium max-w-4xl mx-auto">
            "{t('problem.quote')}"
          </p>
          
          {/* Subtle CTA Hint */}
          <div className="mt-10">
            <p className="text-pink-600 font-semibold text-lg">
              But what if there was a way to change this?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;