export default function Contact() {
  return (
    <div className="bg-black text-white">
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Hey! Tell us all the things</h1>
          <form className="mt-8">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-white text-white w-full mb-4"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-white text-white w-full mb-4"
            />
            <textarea
              placeholder="Tell us about your project"
              className="bg-transparent border-b border-white text-white w-full mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black py-4 px-8 rounded-full font-bold"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
