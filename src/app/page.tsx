import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-[#6e61e9]">
      <div className="relative mb-4">
        <Image
          className="relative"
          src="/something.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <hr className="w-full text-white"/>
    </main>
  );
}
