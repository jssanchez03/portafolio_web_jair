import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // EmailJS configuration - Replace with your actual values
  const SERVICE_ID = 'service_cobfowa'; // Tu Service ID de EmailJS
  const TEMPLATE_ID = 'template_zgf0egz'; // Tu Template ID
  const PUBLIC_KEY = 'HvYCW1S8mHn0TXeqO'; // Tu Public Key

  const validateForm = (formData: FormData): {[key: string]: string} => {
    const errors: {[key: string]: string} = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Por favor ingresa un email válido';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (message && message.length > 500) {
      errors.message = 'El mensaje no puede exceder 500 caracteres';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      setIsSuccess(true);
      form.current.reset();
    } catch (error) {
      setError('Error al enviar el mensaje. Inténtalo de nuevo.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: "jairssan03@gmail.com",
      href: "mailto:jairssan03@gmail.com"
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "+593 99 123 4567",
      href: "tel:+59399123456"
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: "Santo Domingo, Ecuador",
      href: "#"
    }
  ];

  if (isSuccess) {
    return (
      <section id="contact" className="py-20" style={{ background: 'var(--section-alt-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('contact.success')}
            </h2>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              {t('contact.successMessage')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('contact.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--fg)' }}>
                  {t('contact.getInTouch')}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border"
                        style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}
                      >
                        <IconComponent className="w-6 h-6 mr-4" style={{ color: 'var(--accent)' }} />
                        <div>
                          <p className="text-sm" style={{ color: 'var(--muted)' }}>{info.label}</p>
                          <p className="font-medium" style={{ color: 'var(--fg)' }}>{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.02]"
                    style={{ 
                      border: `2px solid ${formErrors.name ? '#ef4444' : 'var(--border)'}`, 
                      background: 'var(--card-bg)', 
                      color: 'var(--fg)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = formErrors.name ? '#ef4444' : 'var(--primary)';
                      e.target.style.boxShadow = `0 0 0 3px ${formErrors.name ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = formErrors.name ? '#ef4444' : 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onChange={() => {
                      if (formErrors.name) {
                        setFormErrors(prev => ({...prev, name: ''}));
                      }
                    }}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  {formErrors.name && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.02]"
                    style={{ 
                      border: `2px solid ${formErrors.email ? '#ef4444' : 'var(--border)'}`, 
                      background: 'var(--card-bg)', 
                      color: 'var(--fg)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = formErrors.email ? '#ef4444' : 'var(--primary)';
                      e.target.style.boxShadow = `0 0 0 3px ${formErrors.email ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = formErrors.email ? '#ef4444' : 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onChange={() => {
                      if (formErrors.email) {
                        setFormErrors(prev => ({...prev, email: ''}));
                      }
                    }}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                  {formErrors.email && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                    {t('contact.message')}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      minLength={10}
                      maxLength={500}
                      className="w-full px-4 py-3 rounded-lg resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.02]"
                      style={{ 
                        border: `2px solid ${formErrors.message ? '#ef4444' : 'var(--border)'}`, 
                        background: 'var(--card-bg)', 
                        color: 'var(--fg)'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = formErrors.message ? '#ef4444' : 'var(--primary)';
                        e.target.style.boxShadow = `0 0 0 3px ${formErrors.message ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = formErrors.message ? '#ef4444' : 'var(--border)';
                        e.target.style.boxShadow = 'none';
                      }}
                      onChange={(e) => {
                        const messageCount = document.getElementById('message-count');
                        if (messageCount) {
                          messageCount.textContent = e.target.value.length.toString();
                        }
                        if (formErrors.message) {
                          setFormErrors(prev => ({...prev, message: ''}));
                        }
                      }}
                      placeholder={t('contact.messagePlaceholder')}
                    />
                    <div className="absolute bottom-2 right-2 text-xs" style={{ color: 'var(--muted)' }}>
                      <span id="message-count">0</span>/500
                    </div>
                  </div>
                  {formErrors.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.message}
                    </div>
                  )}
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-white"
                  style={{ background: 'var(--primary)' }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'var(--primary)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};