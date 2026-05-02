import { Phone } from "lucide-react";

export function FloatingContacts() {
  return (
    <>
      {/* Phone — left */}
      <a
        href="tel:9994538133"
        aria-label="Call EDZUP"
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg ring-4 ring-white/70 hover:scale-105 transition animate-pulse-ring-blue"
      >
        <Phone className="h-5 w-5" />
      </a>
      {/* WhatsApp — right */}
      <a
        href="https://wa.me/919994538133"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white/70 hover:scale-105 transition animate-pulse-ring"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.65-.93-2.27-.25-.6-.5-.52-.68-.53l-.58-.01a1.1 1.1 0 0 0-.8.38c-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Zm-5.45 7.45h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-3.99 1.05 1.07-3.89-.25-.4a10.5 10.5 0 1 1 8.92 4.94Zm8.93-19.4A12.7 12.7 0 0 0 13.7 1.5C6.7 1.5 1.02 7.18 1.02 14.18c0 2.24.59 4.43 1.7 6.36L.92 27l6.62-1.74a12.66 12.66 0 0 0 6.16 1.57h.01c7 0 12.68-5.68 12.68-12.68 0-3.39-1.32-6.57-3.7-8.96Z" />
        </svg>
      </a>
    </>
  );
}