export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border py-8 sm:mt-16">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          © {new Date().getFullYear()} Chima Ojimma
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Backend · Systems · AI
        </p>
      </div>
    </footer>
  );
}
