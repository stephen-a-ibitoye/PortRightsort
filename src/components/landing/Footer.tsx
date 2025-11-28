export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <nav className="space-x-8 text-lg">
          <a href="#studio" className="hover:text-brand-gray">Studio</a>
          <a href="#services" className="hover:text-brand-gray">Services</a>
          <a href="#works" className="hover:text-brand-gray">Works</a>
          <a href="#contact" className="hover:text-brand-gray">Contact</a>
        </nav>
        <div className="space-x-8 text-lg">
          <a href="https://www.instagram.com/reinostudio/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gray">Instagram</a>
          <a href="https://www.linkedin.com/company/reino-studio" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gray">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
