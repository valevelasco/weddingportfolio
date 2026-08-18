import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';
import { useLanguage } from '@/i18n/LanguageContext';

interface Fields {
  firstName: string;
  partnerName: string;
  email: string;
  weddingDate: string;
  weddingLocation: string;
  guests: string;
  howFound: string;
  message: string;
}

const initialFields: Fields = {
  firstName: '',
  partnerName: '',
  email: '',
  weddingDate: '',
  weddingLocation: '',
  guests: '',
  howFound: '',
  message: '',
};

type Errors = Partial<Record<keyof Fields, boolean>>;

export function ContactSection() {
  const { t } = useLanguage();
  const { contact } = t.home;
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (!fields.firstName.trim()) nextErrors.firstName = true;
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) nextErrors.email = true;
    if (!fields.weddingLocation.trim()) nextErrors.weddingLocation = true;
    if (!fields.message.trim()) nextErrors.message = true;

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-section px-[6vw]">
      <Reveal className="text-center max-w-[560px] mx-auto mb-14">
        <SectionTitle size="h2-xl" className="mb-4">
          {contact.title}
        </SectionTitle>
        <p className="text-body-base text-muted m-0">{contact.subtitle}</p>
      </Reveal>

      {submitted ? (
        <div
          role="status"
          className="max-w-[640px] mx-auto text-center py-12 px-6 border border-border bg-section"
        >
          <p className="font-serif text-2xl text-ink m-0">{contact.thankYou}</p>
        </div>
      ) : (
        <Reveal delayMs={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7"
          >
            <FormField
              id="firstName"
              name="firstName"
              label={contact.labels.firstName}
              value={fields.firstName}
              onChange={handleChange}
              error={errors.firstName}
              errorMessage={contact.errors.firstName}
            />
            <FormField
              id="partnerName"
              name="partnerName"
              label={contact.labels.partnerName}
              value={fields.partnerName}
              onChange={handleChange}
            />
            <FormField
              id="email"
              name="email"
              type="email"
              label={contact.labels.email}
              value={fields.email}
              onChange={handleChange}
              error={errors.email}
              errorMessage={contact.errors.email}
            />
            <FormField
              id="weddingDate"
              name="weddingDate"
              type="date"
              label={contact.labels.weddingDate}
              value={fields.weddingDate}
              onChange={handleChange}
            />
            <FormField
              id="weddingLocation"
              name="weddingLocation"
              label={contact.labels.weddingLocation}
              value={fields.weddingLocation}
              onChange={handleChange}
              error={errors.weddingLocation}
              errorMessage={contact.errors.weddingLocation}
            />
            <FormField
              id="guests"
              name="guests"
              type="number"
              min={0}
              label={contact.labels.guests}
              value={fields.guests}
              onChange={handleChange}
            />
            <FormField
              id="howFound"
              name="howFound"
              label={contact.labels.howFound}
              value={fields.howFound}
              onChange={handleChange}
              fullWidth
            />
            <FormField
              id="message"
              name="message"
              as="textarea"
              label={contact.labels.message}
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
              errorMessage={contact.errors.message}
              fullWidth
            />
            <div className="col-span-full">
              <Button as="button" type="submit" variant="solid-dark">
                {contact.submit}
              </Button>
            </div>
          </form>
        </Reveal>
      )}
    </section>
  );
}
