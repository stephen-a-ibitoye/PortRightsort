import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">Reino</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
