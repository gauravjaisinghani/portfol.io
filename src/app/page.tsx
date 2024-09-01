import Image from "next/image";
import logo from "./something.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white items-center p-4 bg-[#6e61e9]">
      <div className="relative mb-4">
        <Image
          className="relative"
          src={logo}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <hr className="w-full"/>
      <div className="w-full items-center flex flex-col">
        <p className="m-8">Content Section Goes here</p>
        <div className="flex w-full justify-evenly flex-wrap">
          <div className="mb-8 rounded-md min-w-80 h-80 border border-solid border-white bg-white shadow-md"></div>
          <div className="mb-8 rounded-md min-w-80 h-80 border border-solid border-white bg-white shadow-md"></div>
          <div className="mb-8 rounded-md min-w-80 h-80 border border-solid border-white bg-white shadow-md"></div>
        </div>
      </div>
    </main>
  );
}
