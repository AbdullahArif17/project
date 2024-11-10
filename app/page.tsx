import Header from "./components/Header/Header";
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Herosection/Hero";
import SecTwo from "./components/SectionTwo/SecTwo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div >
        <Header></Header>
        <div className="flex justify-center">
          <Image
            className="bg-no-repeat m-4 bg-center bg-cover rounded-full"
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
