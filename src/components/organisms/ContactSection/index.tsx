import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Reveal } from '@/components/atoms/Reveal';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';

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
          Let&apos;s Connect
        </SectionTitle>
        <p className="text-body-base text-muted m-0">I&apos;d love to hear about your wedding.</p>
      </Reveal>

      {submitted ? (
        <div
          role="status"
          className="max-w-[640px] mx-auto text-center py-12 px-6 border border-border bg-section"
        >
          <p className="font-serif text-2xl text-ink m-0">
            Thank you for reaching out. I&apos;ll be in touch soon.
          </p>
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
              label="FIRST NAME"
              value={fields.firstName}
              onChange={handleChange}
              error={errors.firstName}
              errorMessage="Please share your first name."
            />
            <FormField
              id="partnerName"
              name="partnerName"
              label="PARTNER'S NAME"
              value={fields.partnerName}
              onChange={handleChange}
            />
            <FormField
              id="email"
              name="email"
              type="email"
              label="EMAIL"
              value={fields.email}
              onChange={handleChange}
              error={errors.email}
              errorMessage="Please enter a valid email."
            />
            <FormField
              id="weddingDate"
              name="weddingDate"
              type="date"
              label="WEDDING DATE"
              value={fields.weddingDate}
              onChange={handleChange}
            />
            <FormField
              id="weddingLocation"
              name="weddingLocation"
              label="WEDDING LOCATION"
              value={fields.weddingLocation}
              onChange={handleChange}
              error={errors.weddingLocation}
              errorMessage="Please share the location."
            />
            <FormField
              id="guests"
              name="guests"
              type="number"
              min={0}
              label="NUMBER OF GUESTS"
              value={fields.guests}
              onChange={handleChange}
            />
            <FormField
              id="howFound"
              name="howFound"
              label="HOW DID YOU FIND ME?"
              value={fields.howFound}
              onChange={handleChange}
              fullWidth
            />
            <FormField
              id="message"
              name="message"
              as="textarea"
              label="TELL ME ABOUT YOUR WEDDING..."
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
              errorMessage="Please tell me a little about your day."
              fullWidth
            />
            <div className="col-span-full">
              <Button as="button" type="submit" variant="solid-dark">
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </Reveal>
      )}
    </section>
  );
}
