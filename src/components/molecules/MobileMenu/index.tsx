import { X } from 'lucide-react';
import { navLinks } from '@/data/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-cream flex flex-col items-center justify-center gap-8">
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-7 right-7 bg-transparent border-0 cursor-pointer text-ink p-2"
      >
        <X size={28} strokeWidth={1.5} />
      </button>
      {navLinks.map((link) => (
        <a
          key={link.href}
          onClick={onClose}
          href={link.href}
          className="font-serif text-[28px] text-ink"
        >
          {link.label}
        </a>
      ))}
      <a
        onClick={onClose}
        href="#contact"
        className="mt-4 text-cta bg-ink text-cream px-8 py-3.5"
      >
        INQUIRE
      </a>
    </div>
  );
}
