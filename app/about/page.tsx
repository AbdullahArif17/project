import Footer from "../components/Footer/Footer";
import cssStyle from "./about.module.css";
import Header from "../components/Header/Header";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Header></Header>
      <Link
        href="/"
        className="bg-[#90BE6D] text-lg m-12 border-[#C9E3AC] border-2"
      >
        Home
      </Link>
      <h1 className={cssStyle.green}>About</h1>
      <span className={cssStyle.green}>about page</span>
      <Footer></Footer>
    </>
  );
};

export default About;
