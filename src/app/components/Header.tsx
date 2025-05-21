export default function Header() {
    return (
      <header className="flex justify-between items-center py-6 px-4">
        <h1 className="text-xl font-bold">
          <span className="text-white">Port</span>
          <span className="text-gray-400">Folio</span>
        </h1>
        <nav className="space-x-6 text-sm text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </nav>
        <a href="https://github.com/" target="_blank" className="text-white text-2xl">🐱</a>
      </header>
    );
  }
  