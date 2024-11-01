import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <div className="flex flex-col md:flex-row h-[80%]">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-6 md:m-12">
          <h1 className="text-4xl md:text-[44px] text-[#000000] w-[546px] font-bold">
            Welcome To Our Website
          </h1>
          <p className="text-xl md:text-2xl md:w-[571px] h-[156px] text-[#4C4C4C] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ut eligendi alias omnis nesciunt adipisci facere exercitationem
            maxime doloribus placeat nam, iste est mollitia, aut nihil, debitis
            .
          </p>
          <button
            aria-label="Contact us"
            className="text-white bg-black w-[237px] h-[66px] mt-6 font-medium text-2xl"
          >
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src="/image/figma_image.svg"
            alt="hero image"
            width={502}
            height={465}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
