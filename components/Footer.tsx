export default function Footer() {
  return (
    <footer className="bg-neutral-slate text-neutral-400 py-12 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-lg mb-2">LIKHAIAWORKS</p>
          <p>© {new Date().getFullYear()} Likhaiaworks. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
