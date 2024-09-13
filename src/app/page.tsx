import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
    weight: ['700']
  })

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col text-white md:justify-center px-6 py-4 bg-[#1B1B1E] ${syne.className}`}>
      <p className="title-name text-2xl md:text-6xl md:ml-8 mb-20">Gaurav Jaisinghani</p>
    </main>
  );
}
