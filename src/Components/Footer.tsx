export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="flex flex-col gap-2 px-6 py-8 text-left sm:flex-row sm:items-baseline sm:justify-between md:px-12">
        <p className="font-display text-lg">
          Studio <em className="text-clay">KRiA</em>
        </p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
          Architecture &amp; Interior Design —
          Ahmedabad, India
        </p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
