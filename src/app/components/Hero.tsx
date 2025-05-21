export default function Hero() {
    return (
      <section id="home" className="flex flex-col-reverse md:flex-row items-center py-12">
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-400">Hello, I’m Muhammad Umar,</p>
          <h1 className="text-4xl font-extrabold text-blue-300">
            Full stack<br />Developer
          </h1>
          <a href="#contact" className="underline font-bold">Contact Me</a>
        </div>
        <div className="md:w-1/2">
          <img src="/banner_bg.jpg" alt="Profile" className="rounded-[30px] w-full max-w-sm" />
        </div>
      </section>
    );
  }
  