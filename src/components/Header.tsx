import Link from "next/link"


const Header = () => {
  return (
    <header className="container-padding py-6">
      <div className="max-width flex flex-col">
        <div className="text-center mb-7">
          <span className="text-3xl">🥢 SushiScript</span>
        </div>
        <div className="min-w-fit flex justify-center flex-wrap">
          <Link href="/" className="mx-4">Home</Link>
          <Link href="/#popular" className="mx-4">Popular</Link>
          <Link href="/Cardapio" className="mx-4">Cardápio</Link>
          <Link href="/#localization" className="mx-4">Localização</Link>
          <Link href="/#about" className="mx-4">Sobre</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;