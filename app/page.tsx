import { Header } from "@/components/Header/Header";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-5 max-w-6xl mx-auto my-20 lg:my-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 overflow-hidden my-20 lg:my-32 items-center">
          <div className="col-span-full">
            <h1 className="text-5xl font-extrabold leading-[1.14em]">
              Hi! 👋 My name is <span className="text-[#DE524C]">Bekzhan</span>{" "}
              and I&apos;m a software engineer.
            </h1>
          </div>
          <div className="col-span-full font-meduim text-gray-500">
            <ul className="flex h-8 gap-12">
              <li className="h-full">
                <a>
                  <Twitter />
                </a>
              </li>
              <li className="h-full">
                <a>
                  <Github />
                </a>
              </li>
              <li className="h-full">
                <a>
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
