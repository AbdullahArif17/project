import Footer from "../components/Footer/Footer";
import cssStyle from "./about.module.css";
import Header from "../components/Header/Header";


const About = () => {
  return (
    <>
      <Header></Header>
      <h1 className={cssStyle.green}>About</h1>
      <span className={cssStyle.green}>about page</span>
      <Footer></Footer>
    </>
  );
};

export default About;
