import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("your-form-id"); // Replace with your Formspree form ID

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
      value: "Ecuador",
      href: "#"
    }
  ];

  if (state.succeeded) {
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
                        className="flex items-center p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                        style={{ background: 'var(--card-bg)' }}
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{ 
                      border: '1px solid var(--border)', 
                      background: 'var(--card-bg)', 
                      color: 'var(--fg)' 
                    }}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    style={{ 
                      border: '1px solid var(--border)', 
                      background: 'var(--card-bg)', 
                      color: 'var(--fg)' 
                    }}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-200"
                    style={{ 
                      border: '1px solid var(--border)', 
                      background: 'var(--card-bg)', 
                      color: 'var(--fg)' 
                    }}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {state.submitting ? (
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