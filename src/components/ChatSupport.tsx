import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';

import { createFAQs } from '../utils/faqUtils';

const ChatSupport: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useStateimport React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';
import { createFAQs } from '../utils/faqUtils';

const FORMSUBMIT_AJAX = 'https://formsubmit.co/ajax/support@herlifeunbound.com';
const FORMSUBMIT_POST = 'https://formsubmit.co/support@herlifeunbound.com';

const ChatSupport: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const faqs = createFAQs(t);

  // Try to answer from FAQ
  const checkForFAQMatch = (query: string) => {
    const lower = query.toLowerCase();
    const translated =
      i18n.language === 'es'
        ? lower
            .replace(/relación/g, 'relationship')
            .replace(/terapia/g, 'therapy')
            .replace(/resultados/g, 'results')
            .replace(/soltera/g, 'single')
            .replace(/probado/g, 'tried')
        : lower;

    const keywords = ['trauma', 'relationship', 'therapy', 'results', 'single', 'tried'];
    for (const kw of keywords) {
      if (translated.includes(kw)) {
        const match = faqs.find(
          (f) =>
            f.question.toLowerCase().includes(kw) ||
            f.answer.toLowerCase().includes(kw)
        );
        return match || null;
      }
    }
    return null;
  };

  // Fallback: POST via a hidden form to new tab (bypasses CORS/adblock)
  const fallbackSubmit = (payload: Record<string, string>) => {
    const form = document.createElement('form');
    form.action = FORMSUBMIT_POST;
    form.method = 'POST';
    form.target = '_blank';
    form.style.display = 'none';

    Object.entries(payload).forEach(([k, v]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = k;
      input.value = v;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const handleQuickMessage = async (msg: string) => {
    const faqMatch = checkForFAQMatch(msg);
    if (faqMatch) {
      alert(
        `FAQ Match: ${faqMatch.question}\n\n${faqMatch.answer.substring(
          0,
          200
        )}...\n\nFor the full answer, please check our FAQ section below.`
      );
      setIsOpen(false);
    } else {
      setMessage(msg);
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      email,
      message,
      language: i18n.language,
      _subject: `Support Request from ${name}`,
      _replyto: email,
      _captcha: 'false',
      _template: 'table',
    };

    try {
      // Primary path: AJAX JSON
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback to standard POST in new tab
        fallbackSubmit(payload);
      }

      alert(t('chat.ticketCreated') || "Support ticket created! We'll respond within 24 hours.");
      setIsOpen(false);
      setShowForm(false);
      setMessage('');
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Chat submit error:', err);
      // Final fallback to make sure the user can still reach you
      try {
        fallbackSubmit(payload);
        alert(t('chat.ticketCreated') || "Support ticket created! We'll respond within 24 hours.");
        setIsOpen(false);
        setShowForm(false);
        setMessage('');
        setName('');
        setEmail('');
      } catch (innerErr) {
        console.error('Fallback submit error:', innerErr);
        alert(
          t('chat.error') ||
            'Error sending message. Please email support@herlifeunbound.com directly.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">Support Chat</h3>
        <button
          onClick={() => {
            setIsOpen(false);
            setShowForm(false);
            setMessage('');
          }}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {!showForm ? (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-4">How can we help you today?</p>

            {/* Updated to Phase 2 phrasing */}
            <button
              onClick={() => handleQuickMessage('When does Phase 2 launch?')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              When does Phase 2 launch?
            </button>

            <button
              onClick={() => handleQuickMessage('Will this work for my situation?')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              Will this work for my situation?
            </button>

            <button
              onClick={() => handleQuickMessage('I have a different question')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              I have a different question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 px-4 rounded-lg hover:from-pink-700 hover:to-rose-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Creating ticket...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatSupport;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const faqs = createFAQs(t);

  const checkForFAQMatch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Auto-translate Spanish queries to English for keyword matching
    const translatedQuery = i18n.language === 'es' ? 
      lowerQuery
        .replace(/trauma/g, 'trauma')
        .replace(/relación/g, 'relationship')
        .replace(/terapia/g, 'therapy')
        .replace(/resultados/g, 'results')
        .replace(/soltera/g, 'single')
        .replace(/probado/g, 'tried') : lowerQuery;
    
    // Check for FAQ matches
    const keywords = ['trauma', 'relationship', 'therapy', 'results', 'single', 'tried'];
    for (const keyword of keywords) {
      if (translatedQuery.includes(keyword)) {
        const matchedFAQ = faqs.find(faq => 
          faq.question.toLowerCase().includes(keyword) ||
          faq.answer.toLowerCase().includes(keyword)
        );
        return matchedFAQ;
      }
    }
    return null;
  };

  const handleQuickMessage = async (msg: string) => {
    const faqMatch = checkForFAQMatch(msg);
    
    if (faqMatch) {
      // Show instant FAQ answer
      alert(`FAQ Match: ${faqMatch.question}\n\n${faqMatch.answer.substring(0, 200)}...\n\nFor the full answer, please check our FAQ section below.`);
      setIsOpen(false);
    } else {
      setMessage(msg);
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Formspree (replace with actual form ID)
      const response = await fetch('https://formspree.io/f/xpwagkqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          language: i18n.language,
          _replyto: email,
          _subject: `Support Request from ${name}`
        }),
      });

      if (response.ok) {
        alert(t('chat.ticketCreated') || 'Support ticket created! We\'ll respond within 24 hours.');
        setIsOpen(false);
        setShowForm(false);
        setMessage('');
        setName('');
        setEmail('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(t('chat.error') || 'Error sending message. Please email support@herlifeunbound.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">Support Chat</h3>
        <button
          onClick={() => {
            setIsOpen(false);
            setShowForm(false);
            setMessage('');
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {!showForm ? (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-4">
              How can we help you today?
            </p>
            
            <button
              onClick={() => handleQuickMessage('When does Phase 1 launch?')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              When does Phase 1 launch?
            </button>
            
            <button
              onClick={() => handleQuickMessage('Will this work for my situation?')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              Will this work for my situation?
            </button>
            
            <button
              onClick={() => handleQuickMessage('I have a different question')}
              className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
            >
              I have a different question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 px-4 rounded-lg hover:from-pink-700 hover:to-rose-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Creating ticket...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatSupport;
