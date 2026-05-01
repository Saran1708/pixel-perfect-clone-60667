import { Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/edzup-logo.png";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src={logo} alt="EDZUP" className="h-9 w-auto" />
            <p className="mt-4 text-[13px] text-muted-foreground max-w-xs leading-relaxed">
              Coimbatore-based educational consultancy providing 100% free guidance to +2 students for college and course selection.
            </p>
          </div>
          <FooterCol title="Explore" items={[
            { l: "Home", h: "#home" },
            { l: "About", h: "#about" },
            { l: "Services", h: "#services" },
            { l: "Colleges", h: "#colleges" },
            { l: "Contact", h: "#contact" },
          ]} />
          <FooterCol title="Apply" items={[
            { l: "Admission Enquiry", h: "/enquiry" },
            { l: "Engineering Colleges", h: "#colleges" },
            { l: "Arts & Science", h: "#colleges" },
            { l: "7.5% Category", h: "#services" },
          ]} />
          <div>
            <h4 className="text-[15px] font-semibold">Reach us</h4>
            <ul className="mt-4 space-y-3 text-[13px] text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-accent2" /> <a href="tel:9994538133" className="hover:text-foreground">9994538133</a></li>
              <li className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5 text-accent2" /> <a href="https://wa.me/919994538133" className="hover:text-foreground">WhatsApp Dharani K.K.</a></li>
              <li className="flex gap-2"><MapPin className="h-3.5 w-3.5 text-accent2 mt-0.5 shrink-0" /> Stark Tower, Kamaraj Nagar, East Zone, Kaalapatti Road, Coimbatore – 641014</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row gap-3 justify-between text-[12px] text-muted-foreground">
          <span>© {new Date().getFullYear()} EDZUP — edzup.uk. All rights reserved.</span>
          <span>Founded by Dharani K.K. (MBA) · Coimbatore</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="text-[15px] font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-[13px]">
        {items.map((i) => (
          <li key={i.l}><a href={i.h} className="text-muted-foreground hover:text-foreground transition">{i.l}</a></li>
        ))}
      </ul>
    </div>
  );
}
