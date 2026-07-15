import { lato } from "@/components/fonts/fonts";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${lato.className} antialiased min-h-screen flex items-center justify-center`}
    >
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col items-center mb-6 ">
          <h1 className="text-2xl font-bold">Budgefy</h1>
          <p>Finances made easy</p>
        </div>
        {children}
      </div>
    </div>
  );
}
