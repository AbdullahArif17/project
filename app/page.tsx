import Header from "./components/Header/Header";
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Herosection/Hero";
import SecTwo from "./components/SectionTwo/SecTwo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <Header></Header>
        <ul className="flex flex-col items-center">
          <li>
            <Link
              href="/"
              className="bg-[#90BE6D] text-lg m-12 border-[#C9E3AC] border-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-[#90BE6D] text-lg m-12 border-[#C9E3AC] border-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/figma"
              className="bg-[#90BE6D] text-lg m-12 border-[#C9E3AC] border-2"
            >
              Design
            </Link>
          </li>
        </ul>
        <div className="flex justify-center">
          <Image
            className="bg-no-repeat bg-center bg-cover rounded-full"
            src="/image/me.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <Hero></Hero>
        <SecTwo></SecTwo>
      </div>
      <Footer></Footer>
    </>
  );
}
