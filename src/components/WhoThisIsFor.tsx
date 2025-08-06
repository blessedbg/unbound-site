import React from 'react';
import { useTranslation } from 'react-i18next';

const WhoThisIsFor: React.FC = () => {
  const { t } = useTranslation();

  // Define profiles array with safe fallbacks
  const profiles = [
    {
      emoji: "💔",
      title: t('whoThisIsFor.profiles.serialDater.title') || 'Serial Dater',
      description: t('whoThisIsFor.profiles.serialDater.description') || ''
    },
    {
      emoji: "🔄",
      title: t('whoThisIsFor.profiles.patternRepeater.title') || 'Pattern Repeater',
      description: t('whoThisIsFor.profiles.patternRepeater.description') || ''
    },
    {
      emoji: "🚪",
      title: t('whoThisIsFor.profiles.healthySabotager.title') || 'Healthy Sabotager',
      description: t('whoThisIsFor.profiles.healthySabotager.description') || ''
    },
    {
      emoji: "💭",
      title: t('whoThisIsFor.profiles.overthinker.title') || 'Overthinker',
      description: t('whoThisIsFor.profiles.overthinker.description') || ''
    },
    {
      emoji: "🎭",
      title: t('whoThisIsFor.profiles.traumaBondSurvivor.title') || 'Trauma Bond Survivor',
      description: t('whoThisIsFor.profiles.traumaBondSurvivor.description') || ''
    },
    {
      emoji: "🔧",
      title: t('whoThisIsFor.profiles.fixer.title') || 'The Fixer',
      description: t('whoThisIsFor.profiles.fixer.description') || ''
    }
  ];

  return (
    <section className="section bg-gradient-soft">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <h2 className="text-headline text-gray-900">
            {t('whoThisIsFor.headline')}
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            {t('whoThisIsFor.subtitle')}
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle background image for emotional resonance */}
              <div className="text-5xl mb-6" role="img" aria-label={profile.title}>
                {profile.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{profile.title}</h3>
              <p className="text-gray-600 leading-relaxed">{profile.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-lg border border-pink-100">
          <blockquote className="text-xl text-gray-700 italic leading-relaxed font-medium">
            "{t('whoThisIsFor.quote')}"
          </blockquote>
          <cite className="sr-only">Unbound Method Insight</cite>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;