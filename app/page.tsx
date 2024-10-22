import Header from "./components/Header/Header";
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Herosection/Hero";
import SecTwo from "./components/SectionTwo/SecTwo";


export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <ul className="flex flex-col items-center">
          <li>
            <Link
              href="/"
              className="bg-rose-500 text-lg m-12 border-red-600 border-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-rose-500 text-lg m-12 border-red-600 border-2"
            >
              About
            </Link>
          </li>
        </ul>
        <Hero></Hero>
        <SecTwo></SecTwo>
      </div>
      <Footer></Footer>
    </>
  );
}
