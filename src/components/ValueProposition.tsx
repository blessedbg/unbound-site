import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Zap, Target, Heart } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Shield,
      title: t('valueProposition.benefits.breakFree.title'),
      subtitle: t('valueProposition.benefits.breakFree.subtitle'),
      description: t('valueProposition.benefits.breakFree.description'),
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Zap,
      title: t('valueProposition.benefits.rewire.title'),
      subtitle: t('valueProposition.benefits.rewire.subtitle'),
      description: t('valueProposition.benefits.rewire.description'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: t('valueProposition.benefits.master.title'),
      subtitle: t('valueProposition.benefits.master.subtitle'),
      description: t('valueProposition.benefits.master.description'),
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Heart,
      title: t('valueProposition.benefits.build.title'),
      subtitle: t('valueProposition.benefits.build.subtitle'),
      description: t('valueProposition.benefits.build.description'),
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-gray-900">{t('valueProposition.headline.part1')}</span>
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">{t('valueProposition.headline.loveLife')}</span>
            <span className="text-gray-900">{t('valueProposition.headline.part2')}</span>
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">{t('valueProposition.headline.insideOut')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {t('valueProposition.subtitle.part1')}
            <span className="font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">{t('valueProposition.subtitle.part2')}</span>
            {t('valueProposition.subtitle.part3')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg font-semibold text-pink-600 mb-4">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;