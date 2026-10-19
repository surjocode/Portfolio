import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-neon-cyan">
        <Terminal className="w-8 h-8" />
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white font-mono">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        The requested resource does not exist or has been relocated within the cyber matrix.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-neon-cyan active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
