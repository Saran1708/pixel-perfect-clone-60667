import { Link } from "@tanstack/react-router";
import { Zap, ShoppingCart, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-white px-3 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
        <Link to="/" className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shrink-0">
          <Zap className="h-5 w-5 fill-white" strokeWidth={0} />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <li><a href="#home" className="hover:opacity-70">HOME</a></li>
          <li><a href="#about" className="hover:opacity-70">ABOUT</a></li>
          <li><a href="#course" className="hover:opacity-70">COURSE</a></li>
          <li><a href="#blog" className="hover:opacity-70">BLOG</a></li>
        </ul>
        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:flex items-center gap-2 text-sm font-semibold">
            <ShoppingCart className="h-4 w-4" />
            CART(0)
          </button>
          <button className="hidden sm:block text-sm font-semibold hover:opacity-70">LOGIN</button>
          <button className="group flex items-center gap-2 rounded-full bg-black py-2.5 pl-5 pr-1.5 text-sm font-bold text-white">
            SIGNUP
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
