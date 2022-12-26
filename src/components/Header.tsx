import Link from "next/link"


const Header = () => {
  return (
    <header className="py-5">
      <div className="max-width container-padding flex items-center justify-between">
        <div>
          <span>SushiScript</span>
        </div>
        <div className="min-w-fit flex justify-between">
          <Link href="/" className="mx-3">Home</Link>
          <Link href="" className="mx-3">Popular</Link>
          <Link href="" className="mx-3">Localização</Link>
          <Link href="" className="mx-3">Sobre</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;