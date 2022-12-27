import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "~/components/BannerCarousel";

import SushiPlate from "../assets/sushiPlate.png";
import SushiTitleOne from "../assets/home-sushi-title 1.png";
import SushiTitleTwo from "../assets/about-sushi-title 1.png";
import SushiAbout from "../assets/about-sushi 1.png";


const Home = () => {
  return (
    <>

      <Head>
        <title>SushiScript</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <section className="container-padding">
          <div className="max-width flex items-center justify-center mt-8 md:flex-col-reverse">

            <div className="max-w-sm">
              <h2 className="koh-font text-4xl sm:text-3xl mb-5">
                Aproveite deliciosas
                <div className="koh-font flex text-2xl sm:text-xl mt-5">
                  <Image className="mr-2" src={SushiTitleOne} width={30} height={30} alt="Sushi" />
                  comidas japonesas
                </div>
              </h2>
              <p className="font-light">Aproveite um bom jantar com os melhores pratos do restaurante e melhore o seu dia.</p>
            </div>
            <Image className="w-[350px] md:w-[250px] mb-5" src={SushiPlate} alt="Sushi" width={350} height={350} />

          </div>
        </section>

        {/* <section className="container-padding mt-12" id="popular">
          <div className="max-width">

            <div className="text-center">
              <span className="text-amber-500">Os melhores pratos</span>
              <h2 className="koh-font text-4xl sm:text-3xl mt-4">Pratos populares</h2>
            </div>

          </div>
        </section> */}

        <section className="container-padding mt-16" id="about">
          <div className="max-width flex items-center justify-center md:flex-col">

            <Image className="w-[250px] md:w-[200px] mb-5" src={SushiAbout} width={250} height={250} alt="Sushi" />
            <div className="max-w-sm ml-10 md:ml-0">
              <span className="text-base text-amber-500">Sobre</span>
              <h2 className="koh-font text-4xl sm:text-3xl mb-5 mt-1">
                Nós Provemos
                <div className="koh-font flex text-2xl sm:text-xl mt-5">
                  comidas saudáveis
                  <Image className="ml-2" src={SushiTitleTwo} width={30} height={30} alt="Sushi" />
                </div>
              </h2>
              <p>Nós escolhemos os peixes de maior qualidade do mercado e as refeições são preparadas por chefes que possuem um conhecimento que é passado de geração em geração</p>
            </div>

          </div>
        </section>

        <section className="container-padding mt-20" id="localization">
          <div className="max-width">

            <div className="text-center">
              <span className="text-amber-500">Nosso endereço</span>
              <h2 className="koh-font text-4xl sm:text-3xl mt-4 mb-12">Localização</h2>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124548.71072991223!2d-38.440941337500036!3d-12.703813199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7166989a960cdd7%3A0x5ad3abf7472af758!2sUniao%20Sushi!5e0!3m2!1spt-BR!2sbr!4v1672168912676!5m2!1spt-BR!2sbr" width="600" height="300" loading="lazy" />
            </div>

          </div>
        </section>

      </main>

      <Footer />

    </>
  );
}

export default Home;