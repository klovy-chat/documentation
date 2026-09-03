export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fd-border bg-fd-card/40">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-8">
        <p className="text-sm text-fd-muted-foreground">
          © Copyright {new Date().getFullYear()} Klovy Chat
        </p>
      </div>
    </footer>
  );
}
