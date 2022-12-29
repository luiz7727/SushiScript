import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminActions from "../components/AdminActions";


const Admin = () => {
  return (
    <>

      <Head>
        <title>SushiScript - Admin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Koh+Santepheap&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="container-padding">
        <section className="max-width mt-20">

          <div className="max-w-lg mx-auto bg-[#e6e6e6] py-16 px-4 rounded-2xl">
            <div className="mb-16 text-center">
              <h1 className="font-medium text-3xl">Olá, adminName</h1>
            </div>

            <div className="max-w-[400px] mx-auto flex flex-col items-center">
              <AdminActions href="/AddProduct" label="Add produto" />
              <AdminActions href="/EditProduct" label="Editar produto" />
              <AdminActions href="/AddMenu" label="Adicionar cardápio" />
            </div>
          </div>

        </section>
      </main>

      <Footer />

    </>
  )
}

export default Admin;