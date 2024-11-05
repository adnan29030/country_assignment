import Link from "next/link";
export default function HomePage() {
    return (
        <>
      <div className="flex flex-col text-3xl font-bold justify-center h-screen bg-orange-500 items-center ">
        <h1 className="flex justify-center text-5xl font-extrabold mb-8">Select Your Country </h1>
        <Link href="/country/pakistan">Pakistan</Link>
        <Link href="/country/india">India</Link>
        <Link href="/country/srilanka">SriLanka</Link>
        <Link href="/country/bangladash">Bangladash</Link>
        <Link href="/country/japan">Japan</Link>

      </div>
      </>
    );
  }