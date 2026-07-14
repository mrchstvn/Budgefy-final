import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <Logo />
      </Link>
    </nav>
  );
}
