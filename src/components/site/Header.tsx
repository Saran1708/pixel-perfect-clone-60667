import { Link, useLocation } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/edzup-logo.png";

export function Header() {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const hashTo = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2.5 ring-1 bg-white/90 backdrop-blur shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ring-black/5">
        <Link to="/" className="flex items-center gap-2 pl-2 shrink-0">
          <img src={logo} alt="EDZUP" className="h-8 w-auto" />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-foreground/80">
          <li><a href={hashTo("#home")} className="hover:text-brand transition">Home</a></li>
          <li><a href={hashTo("#about")} className="hover:text-brand transition">About</a></li>
          <li><a href={hashTo("#services")} className="hover:text-brand transition">Services</a></li>
          <li><a href={hashTo("#colleges")} className="hover:text-brand transition">Colleges</a></li>
          <li><a href={hashTo("#contact")} className="hover:text-brand transition">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="tel:9994538133" className="hidden sm:flex items-center gap-1.5 text-[13px] font-medium text-foreground/80 hover:text-brand transition-colors">
            <Phone className="h-3.5 w-3.5" />
            9994538133
          </a>
          <Link
            to="/enquiry"
            className="group flex items-center gap-2 rounded-full bg-brand py-2 pl-4 pr-1.5 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 transition"
          >
            APPLY NOW
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent2 text-accent2-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}