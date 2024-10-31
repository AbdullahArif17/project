import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
          <p className="text-[32px] w-[571px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <button>Contact US</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"./image/figma_image.svg"}
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