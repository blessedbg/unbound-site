import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb } from 'lucide-react';

const OriginStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('originStory.headline')}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 relative overflow-hidden border border-gray-100">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t('originStory.story.part1')}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('originStory.story.part2')}
            </p>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-10 mb-8 border border-yellow-200">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-xl text-gray-700 italic font-medium">
                "{t('originStory.story.quote')}"
              </p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('originStory.story.part3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;