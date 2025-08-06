import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { createFAQs } from '../utils/faqUtils';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // eslint-disable-next-line react-refresh/only-export-components
  const faqs = useMemo(() => createFAQs(t), [t]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t('faq.headline')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChevronUp className="w-4 h-4 text-pink-600" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-12 text-center shadow-lg border border-pink-100">
          <p className="text-lg text-gray-700 mb-4">
            {t('faq.stillQuestions')}
          </p>
          <p className="text-gray-600">
            {t('faq.contact')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;