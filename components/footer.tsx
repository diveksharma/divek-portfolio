export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-black text-white">
            D
          </div>
          <span className="text-sm text-white/30">Divek Sharma</span>
        </div>
        <p className="text-xs text-white/20 font-mono">
          Designed & built by Divek Sharma · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/divek-sharma-0203i5/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:diveksharm@gmail.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
