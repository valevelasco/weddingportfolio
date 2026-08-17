import type { ChangeEvent } from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'date' | 'number';
  as?: 'input' | 'textarea';
  rows?: number;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  min?: number;
}

const fieldClasses =
  'w-full box-border py-3 bg-transparent border-0 border-b border-border text-field text-ink font-sans focus-visible:outline-offset-2';

export function FormField({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  as = 'input',
  rows = 5,
  error = false,
  errorMessage,
  fullWidth = false,
  min,
}: FormFieldProps) {
  return (
    <div className={fullWidth ? 'col-span-full' : undefined}>
      <label htmlFor={id} className="block text-nav text-muted mb-2 tracking-tightish">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          aria-invalid={error}
          className={`${fieldClasses} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          min={min}
          value={value}
          onChange={onChange}
          aria-invalid={error}
          className={fieldClasses}
        />
      )}
      {error && errorMessage && (
        <p role="alert" className="text-error text-xs mt-1.5 m-0">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
