import Header from "./components/Header/Header";
import Link from "next/link";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Herosection/Hero";

export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <ul>
          <li>
            <Link style={{'margin' : '10px', 'fontSize' : 25}} href="/">Home</Link>
          </li>
          <li>
            <Link style={{'margin' : '10px' ,'fontSize' : 25}} href="/about">About</Link>
          </li>
        </ul>
        <Hero></Hero>
      </div>
      <Footer></Footer>
    </>
  );
}
