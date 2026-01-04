export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 px-6 text-sm text-slate-500 flex justify-between">
      <span>© {new Date().getFullYear()} Raed</span>
      <span>Next.js · Radix UI · Tailwind</span>
    </footer>
  );
}
