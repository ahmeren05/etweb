'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>
            <CheckCircle size={32} />
          </div>
          <h3 className={styles.successTitle}>{t('successTitle')}</h3>
          <p className={styles.successText}>{t('successMessage')}</p>
        </div>
      </div>
    );
  }

  const serviceOptions = [
    { value: 'electrical', label: t('serviceOptions.electrical') },
    { value: 'automation', label: t('serviceOptions.automation') },
    { value: 'mechanical', label: t('serviceOptions.mechanical') },
    { value: 'construction', label: t('serviceOptions.construction') },
    { value: 'cleanroom', label: t('serviceOptions.cleanroom') },
    { value: 'integrated', label: t('serviceOptions.integrated') },
    { value: 'other', label: t('serviceOptions.other') },
  ];

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formTitle}>{t('formTitle')}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="contact-name" className={styles.label}>
              {t('nameLabel')}
            </label>
            <input
              id="contact-name"
              type="text"
              className={styles.input}
              placeholder={t('namePlaceholder')}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-email" className={styles.label}>
              {t('emailLabel')}
            </label>
            <input
              id="contact-email"
              type="email"
              className={styles.input}
              placeholder={t('emailPlaceholder')}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-phone" className={styles.label}>
              {t('phoneLabel')}
            </label>
            <input
              id="contact-phone"
              type="tel"
              className={styles.input}
              placeholder={t('phonePlaceholder')}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-service" className={styles.label}>
              {t('serviceLabel')}
            </label>
            <select
              id="contact-service"
              className={styles.select}
              defaultValue=""
            >
              <option value="" disabled>
                {t('servicePlaceholder')}
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
            <label htmlFor="contact-message" className={styles.label}>
              {t('messageLabel')}
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              placeholder={t('messagePlaceholder')}
              required
            />
          </div>

          <div className={styles.submitButton}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('sending') : t('submitButton')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
