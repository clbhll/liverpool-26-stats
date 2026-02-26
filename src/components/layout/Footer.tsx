export default function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-600 bg-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-surface-200">
        <p>
          <span className="text-lfc-red font-semibold">LFC Stats</span> — 2025/26 Season
        </p>
        <p className="text-xs opacity-60">
          Unofficial fan site. Data is for informational purposes only.
        </p>
      </div>
    </footer>
  );
}
