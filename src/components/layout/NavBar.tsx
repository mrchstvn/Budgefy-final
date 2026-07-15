import Logo from "@/components/ui/Logo";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Help Center", href: "/help-center" },
];

export default function NavBar() {
  return (
    <nav className="flex flex-row h-18 items-center justify-between bg-white border-b border-gray-300 p-10">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex flex-row gap-4 text-lg items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
