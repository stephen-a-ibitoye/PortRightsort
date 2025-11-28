export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <nav className="space-x-8">
          <a href="#studio" className="hover:underline">Studio</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#works" className="hover:underline">Works</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="space-x-4">
          <a href="https://www.instagram.com/reinostudio/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://www.linkedin.com/company/reino-studio" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
