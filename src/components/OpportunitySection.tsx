import React from 'react';
import i18n from '../i18n';
import { Brain, Sparkles, Target } from 'lucide-react';

const OpportunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-pink-300 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-rose-300 rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            {i18n.t('opportunity.headline')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {i18n.t('opportunity.subtitle')}
          </p>
        </div>

        {/* Method Highlight - Conversion Critical */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-20 border border-pink-100">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {i18n.t('opportunity.method.title')}
          </h3>
          <p className="text-xl text-gray-600 text-center leading-relaxed mb-10 max-w-3xl mx-auto">
            {i18n.t('opportunity.method.description')}
          </p>
        </div>

        {/* 3-Step Process - Clear Path Forward */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">{i18n.t('opportunity.steps.identify.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{i18n.t('opportunity.steps.identify.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 group">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">{i18n.t('opportunity.steps.rewire.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{i18n.t('opportunity.steps.rewire.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">{i18n.t('opportunity.steps.attract.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{i18n.t('opportunity.steps.attract.description')}</p>
          </div>
        </div>
        
        {/* Transition to Next Section */}
        <div className="text-center bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
          <p className="text-lg text-gray-600 font-medium">
            Sound like something you need? Let's see if this is right for you...
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;