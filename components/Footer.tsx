export default function Footer() {
  return (
    <footer className="w-full bg-ink border-t border-rule px-12 py-8 flex flex-row items-center justify-between">
      {/* left — wordmark */}
      <p className="font-display font-light text-sm tracking-[0.25em] uppercase text-smoke">
        Lama Group
      </p>

      {/* right — copyright */}
      <p className="font-body font-light text-[0.65rem] tracking-[0.12em] uppercase text-mist">
        © {new Date().getFullYear()} Lama Holdings. All rights reserved.
      </p>
    </footer>
  );
}
