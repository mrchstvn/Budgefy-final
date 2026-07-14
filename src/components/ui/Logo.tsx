import { cedarvilleCursive } from "@/components/fonts/font";

export default function Logo() {
  return (
    <div className={`${cedarvilleCursive.className} antialiased`}>
      <div className="hidden sm:flex sm:flex-row">
        <span className="text-5xl">B</span>
        <span className="hidden text-2xl md:block">udgefy</span>
      </div>
    </div>
  );
}
