import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // YouTube (minimal chrome, EN captions/UI)
  const videoId = 'AHiT-tIk1uM';
  const videoSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&playsinline=1&controls=0&modestbranding=1&rel=0` +
    `&cc_load_policy=1&cc_lang_pref=en&hl=en&enablejsapi=1`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [needsSound, setNeedsSound] = useState(true);

  useEffect(() => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const post = (func: string, args: any[] = []) =>
      win.postMessage(JSON.stringify({ event: 'command', func, args }), '*');
    const t1 = setTimeout(() => {
      post('playVideo'); post('unMute'); post('setVolume', [100]);
    }, 600);
    return () => clearTimeout(t1);
  }, []);

  const enableSound = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
    win.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), '*');
    win.postMessage(JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }), '*');
    setNeedsSound(false);
  };

  // Remove dash in “in your body — and in”
  const part4Clean = t('hero.subtitle.part4').replace(/\s*[—–-]\s*/g, ' ');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Subtle background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-float delay-2000"></div>
      </div>

      {/* SAFE TOP PADDING so header doesn’t overlap */}
      <div className="relative max-w-7xl mx-auto px-4 pt-24 md:pt-28 pb-12 md:pb-16">
        {/* 2 cols on desktop so video is visible above the fold; stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT: Badge + Headline + Subhead + CTA */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-5">
              <EarlyAccessBadge />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight md:leading-[1.15] tracking-tight max-w-2xl md:max-w-none mx-auto md:mx-0">
              {i18n.language === 'en' ? (
                <>
                  You keep choosing the <span className="text-accent font-semibold">pain</span> you{' '}
                  <span className="text-accent font-semibold">recognize</span>.<br />
                  Let&apos;s <span className="text-accent font-semibold">change</span> that.
                </>
              ) : (
                <>
                  Sigues eligiendo el <span className="text-accent font-semibold">dolor</span> que{' '}
                  <span className="text-accent font-semibold">conoces</span>.<br />
                  Cambiemos <span className="text-accent font-semibold">eso</span>.
                </>
              )}
            </h1>

            {/* Subhead — gradient ONLY on Break / Rewire / Build */}
            <div className="mt-4 md:mt-5 text-base md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-700 max-w-2xl md:max-w-none mx-auto md:mx-0">
              <p>
                <span className="font-bold text-gradient">{t('hero.subtitle.part1')}</span>
                <span>{t('hero.subtitle.part2')}</span>
                <span className="font-bold text-gradient">{t('hero.subtitle.rewires')}</span>
                <span>{t('hero.subtitle.part3')}</span>
              </p>
              <p className="mt-1.5">
                <span className="font-bold text-gradient">Build</span>{' '}
                <span className="font-bold">{t('hero.subtitle.selfTrust')}</span>
                <span>{part4Clean}</span>
                <span className="font-bold">{t('hero.subtitle.safeLove')}</span>
                <span>{t('hero.subtitle.part5')}</span>
              </p>
            </div>

            {/* CTA + reassurance */}
            <div className="mt-6">
              <CTAButton
                text={t('stickyButton')}
                className="btn-lg px-8 md:px-10 py-3.5 md:py-4 text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300"
              />
              <p className="mt-2 text-sm text-gray-600">14-Day Guarantee · Instant Access</p>
            </div>
          </div>

          {/* RIGHT: Video (above-the-fold on desktop) */}
          <div className="max-w-2xl md:max-w-none mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  ref={iframeRef}
                  width="1296"
                  height="729"
                  style={{ maxWidth: '100%', height: 'auto', aspectRatio: '16 / 9', border: 0 }}
                  src={videoSrc}
                  title="Unbound VSL (EN)"
                  frameBorder={0}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                {needsSound && (
                  <button
                    onClick={enableSound}
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white/90 hover:bg-white text-gray-900 text-sm font-semibold px-3 py-1.5 md:px-3.5 md:py-2 rounded-full shadow-md backdrop-blur-sm"
                    aria-label="Enable sound"
                  >
                    🔊 Sound on
                  </button>
                )}
              </div>
            </div>

            {/* Compact caption row */}
            <div className="text-center md:text-left mt-4 space-y-1">
              <p className="text-xs md:text-sm text-gray-600">{t('hero.captionsAvailable')}</p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-xs md:text-sm">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-2 bg-red-500 rounded-sm" />
                  <span className="text-gray-600">{t('hero.english')}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-2 bg-yellow-500 rounded-sm" />
                  <span className="text-gray-600">{t('hero.spanish')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust chips */}
        <div className="mt-8 md:mt-10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.guarantee')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.instantAccess')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-gray-100">
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
