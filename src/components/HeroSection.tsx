import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // --- Language for captions/UI (main=en, /es=es) ---
  const lang = (i18n?.language || 'en').split('-')[0];
  const hl = lang === 'es' ? 'es' : 'en';
  const cc = hl;

  // --- YouTube embed config ---
  const videoId = 'AHiT-tIk1uM';
  const params = new URLSearchParams({
    autoplay: '1',          // start automatically
    mute: '1',              // start muted so autoplay is allowed...
    loop: '1',
    playlist: videoId,      // required for loop
    playsinline: '1',
    controls: '1',
    modestbranding: '1',
    rel: '0',
    cc_load_policy: '1',
    cc_lang_pref: cc,       // captions language
    hl,                     // player UI language
    enablejsapi: '1',       // allow postMessage API
  });
  const videoSrc = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  // --- Unmute logic: try to enable sound immediately; fall back to tap overlay if blocked ---
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  const post = (cmd: string, args: any[] = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ event: 'command', func: cmd, args }), '*');
  };

  // Try to play with sound (some browsers will allow; others will block until user gesture)
  const tryEnableSound = () => {
    post('unMute');
    post('setVolume', [100]);
    post('playVideo');
  };

  useEffect(() => {
    // Give the player a moment to initialize, then attempt sound
    const t1 = setTimeout(() => {
      tryEnableSound();
    }, 600);

    // If sound was blocked, reveal the overlay prompt
    const t2 = setTimeout(() => setNeedsTap(true), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleTap = () => {
    tryEnableSound();
    setNeedsTap(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-8 mb-16">
          {/* Early Access Badge */}
          <div className="flex justify-center mb-8">
            <EarlyAccessBadge />
          </div>

          {/* Main Headline (original structure) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
            {t('hero.headline.part1')}{' '}
            <span className="text-gradient">
              {t('hero.headline.part2')}
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className="
              text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed
              max-w-5xl mx-auto space-y-2
              text-gray-700
              [&_*]:text-gray-700
            "
          >
            <p>
              <span className="font-bold">{t('hero.subtitle.part1')}</span>
              <span>{t('hero.subtitle.part2')}</span>
              <span className="font-bold">{t('hero.subtitle.rewires')}</span>
              <span>{t('hero.subtitle.part3')}</span>
            </p>
            <p>
              <span>Construye </span>
              <span className="font-bold">{t('hero.subtitle.selfTrust')}</span>
              <span>{t('hero.subtitle.part4')}</span>
              <span className="font-bold">{t('hero.subtitle.safeLove')}</span>
              <span>{t('hero.subtitle.part5')}</span>
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="video-container relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={videoSrc}
                title={hl === 'es' ? 'Unbound VSL (ES)' : 'Unbound VSL (EN)'}
                frameBorder={0}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              {needsTap && (
                <button
                  onClick={handleTap}
                  aria-label={hl === 'es' ? 'Tocar para activar el sonido' : 'Tap to enable sound'}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                >
                  <span className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg">
                    {hl === 'es' ? 'Toca para activar el sonido 🔊' : 'Tap to enable sound 🔊'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Video Caption */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">
              {t('hero.captionsAvailable', hl === 'es' ? 'Subtítulos disponibles' : 'Captions available')}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-2 bg-red-500 rounded-sm"></span>
                <span className="text-gray-600">{t('hero.english', 'English')}</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-2 bg-yellow-500 rounded-sm"></span>
                <span className="text-gray-600">{t('hero.spanish', 'Español')}</span>
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <CTAButton
            text={t('stickyButton')}
            className="btn-lg px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          />

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.guarantee')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.instantAccess')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.scienceBased')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
