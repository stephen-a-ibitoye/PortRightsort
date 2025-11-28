import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/studio">Studio</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
