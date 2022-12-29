import Link from "next/link"

import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";


const Header = () => {
  return (
    <header className="container-padding py-6">
      <div className="max-width flex items-center justify-between md:flex-col md:justify-start">
        <div className="text-center flex items-center md:mb-7">
          <span className="text-3xl">🥢 SushiScript</span>
        </div>
        <div className="min-w-fit flex justify-center flex-wrap">
          <Link href="/" title="Home" className="text-xl mx-4">
            <AiOutlineHome />
          </Link>
          <Link href="/#popular" title="Pratos populares" className="text-xl mx-4">
            <BiDish />
          </Link>
          <Link href="/Cardapio" title="Cardápio" className="text-xl mx-4">
            <SlBookOpen />
          </Link>
          <Link href="/#localization" title="Localização" className="text-xl mx-4">
            <HiOutlineLocationMarker />
          </Link>
          <Link href="/#about" title="Sobre o SushiScript" className="text-xl mx-4">
            <AiOutlineInfoCircle />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;