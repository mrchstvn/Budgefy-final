import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-baseline justify-start min-h-screen gap-7 p-20">
      <div className="flex flex-col gap-2 text-9xl">
        <h1>Finance </h1>
        <h1> made easy</h1>
      </div>

      <div className="flex flex-row gap-4">
        <Link
          href="/login"
          className="btn btn-ghost border text-black px-4 py-2 rounded-md hover:cursor-pointer w-50 text-center"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:cursor-pointer w-50 text-center"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
