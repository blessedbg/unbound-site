import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Brain, Heart, Lightbulb } from 'lucide-react';

const ScientificProof: React.FC = () => {
  const { t } = useTranslation();

  const sciences = [
    {
      icon: Heart,
      title: t('scientificProof.sciences.attachmentTheory.title'),
      description: t('scientificProof.sciences.attachmentTheory.description'),
      citation: t('scientificProof.sciences.attachmentTheory.citation')
    },
    {
      icon: Brain,
      title: t('scientificProof.sciences.cbt.title'),
      description: t('scientificProof.sciences.cbt.description'),
      citation: t('scientificProof.sciences.cbt.citation')
    },
    {
      icon: Lightbulb,
      title: t('scientificProof.sciences.emotionalIntelligence.title'),
      description: t('scientificProof.sciences.emotionalIntelligence.description'),
      citation: t('scientificProof.sciences.emotionalIntelligence.citation')
    },
    {
      icon: BookOpen,
      title: t('scientificProof.sciences.mindfulness.title'),
      description: t('scientificProof.sciences.mindfulness.description'),
      citation: t('scientificProof.sciences.mindfulness.citation')
    }
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('scientificProof.headline')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('scientificProof.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sciences.map((science, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <science.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{science.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{science.description}</p>
                  <p className="text-sm text-gray-500 italic">{science.citation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-12 text-center shadow-lg border border-pink-100">
          <p className="text-xl text-gray-700 italic font-medium">
            "{t('scientificProof.quote')}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificProof;