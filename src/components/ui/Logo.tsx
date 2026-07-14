import { cedarvilleCursive } from "@/components/fonts/fonts";
export default function Logo() {
  return (
    <div
      className={`${cedarvilleCursive.className} antialiased flex flex-row items-center gap-1 text-primary-500`}
    >
      <span className="text-5xl">B</span>
      <span className="text-2xl hidden md:block">udgefy</span>
    </div>
  );
}
