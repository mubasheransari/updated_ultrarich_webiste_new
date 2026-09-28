import Link from "next/link";

const SOCIALS = [
  { label: "Facebook", href: "#", path: "M13 22v-8h3l.5-4H13V7.5c0-1.2.4-2 2-2h1.6V2.1C16.2 2 15 2 13.8 2 11 2 9.5 3.7 9.5 6.9V10H7v4h2.5v8h3.5z" },
  { label: "Instagram", href: "#", path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .9-1.7 1.1-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.9-1-1.1-1.7-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.1-1.7C4.2 3.2 4.7 2.8 5.4 2.5c.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" },
  { label: "YouTube", href: "#", path: "M21.6 7.2s-.2-1.5-.9-2.2c-.8-.9-1.7-.9-2.1-1C15.9 3.8 12 3.8 12 3.8s-3.9 0-6.6.2c-.4 0-1.3.1-2.1 1-.7.7-.9 2.2-.9 2.2S2.2 9 2.2 10.7v1.5c0 1.8.2 3.5.2 3.5s.2 1.5.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.3.2 7.3.2s3.9 0 6.6-.2c.4 0 1.3-.1 2.1-1 .7-.7.9-2.2.9-2.2s.2-1.7.2-3.5v-1.5c0-1.8-.2-3.5-.2-3.5zM9.9 14.9V8.7l5.4 3.1-5.4 3.1z" },
  { label: "TikTok", href: "#", path: "M14 3h2.5c.2 1.5 1.1 2.9 2.5 3.6 1 .5 2 .6 2 .6v2.6s-1.5 0-2.8-.6c-.5-.2-1-.5-1.4-.8v6.4c0 3-2.4 5.2-5.2 5.2S6.4 17.8 6.4 14.8c0-3 2.4-5.2 5.2-5.2.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.2-.9-.2-1.4 0-2.6 1.1-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.1 2.6-2.6V3z" },
  { label: "LinkedIn", href: "#", path: "M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.3v2h.06c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V23h-4.5v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V23h-4.5V8.25z" },
];

export default function Footer() {
  return (
    <footer className="bg-red-textured text-white">
      <div className="grid grid-cols-1 gap-6 bg-brand-gold px-6 py-10 text-center text-brand-black sm:grid-cols-2 md:grid-cols-4 md:px-16">
        {[
          { title: "Free Delivery", sub: "Nationwide - All Orders" },
          { title: "Freshness Seal", sub: "Packed in Aseptic Material" },
          { title: "Single Estate", sub: "Nandi Hills, Kenya" },
          { title: "Returns", sub: "7-Day Satisfaction Promise" },
        ].map((f) => (
          <div key={f.title} className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-black/70">
              <span className="text-lg">•</span>
            </div>
            <p className="font-display text-lg font-semibold">{f.title}</p>
            <p className="text-sm">{f.sub}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-16">
        <div>
          <h4 className="font-display text-lg font-semibold">Address</h4>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Mezan Tea Pvt ltd
            <br />
            Plot No. A-22, (Portion-II),
            <br />
            Mauripur Road, S.I.T.E, Karachi, Pakistan
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Contact Us</h4>
          <p className="mt-3 text-sm text-white/85">+92 337 1046238</p>
          <p className="text-sm text-white/85">customersupport@mezangrp.com</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-red transition hover:bg-brand-gold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-6 py-6 text-center text-xs text-white/80 md:px-16">
        <p>
          © 2026 Ultra Rich. All rights reserved. Designed &amp; Developed by{" "}
          <a href="#" className="underline underline-offset-2">
            THE BLUE DOT
          </a>
        </p>
        <p className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {["Privacy Policy", "Terms of Service", "Return & Refund Policy", "Shipping policy", "Contact Information", "Legal Notice", "Contact Us"].map(
            (item, i, arr) => (
              <span key={item}>
                <Link href={item === "Contact Us" ? "/contact-us" : "#"} className="underline underline-offset-2">
                  {item}
                </Link>
                {i < arr.length - 1 && <span className="mx-1">I</span>}
              </span>
            )
          )}
        </p>
      </div>
    </footer>
  );
}
