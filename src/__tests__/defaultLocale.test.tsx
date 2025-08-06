import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import HeroSection from '../components/HeroSection';

// Mock i18n for testing
jest.mock('../i18n', () => ({
  language: 'en',
  t: (key: string) => {
    const translations: Record<string, string> = {
      'hero.headline.micro': 'Break the trauma bond. Rewire your patterns. Build self-trust—in your body, and in safe love.',
      'header.getStarted': 'Get Started'
    };
    return translations[key] || key;
  },
  changeLanguage: jest.fn(),
  on: jest.fn()
}));

describe('Default Locale', () => {
  beforeEach(() => {
    // Reset i18n language to English
    i18n.language = 'en';
  });

  test('renders English H1 text by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HeroSection />
      </I18nextProvider>
    );

    // Check for English headline text
    expect(screen.getByText(/You keep choosing the/)).toBeInTheDocument();
    expect(screen.getByText(/pain/)).toBeInTheDocument();
    expect(screen.getByText(/recognize/)).toBeInTheDocument();
    expect(screen.getByText(/change/)).toBeInTheDocument();
  });

  test('does not render Spanish text by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HeroSection />
      </I18nextProvider>
    );

    // Should not find Spanish text
    expect(screen.queryByText(/Sigues eligiendo/)).not.toBeInTheDocument();
  });
});