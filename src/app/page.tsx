export default function Home() {
  return (
    <div className="bg-black text-white">
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/path/to/your/hero-image.jpg)" }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold">We craft identity, experience and presence.</h1>
          <a
            href="/works"
            className="mt-8 inline-block bg-white text-black py-4 px-8 rounded-full font-bold"
          >
            Our Works
          </a>
        </div>
      </section>
    </div>
  );
}
