import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[88px] bg-[#D9D9D9] flex items-center justify-center">
      <Link href="/contact">
        <button
          aria-label="Contact us"
          className="text-white bg-black w-[200px] h-[50px] font-medium text-2xl"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Footer;
