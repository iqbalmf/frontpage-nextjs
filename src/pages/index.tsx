import Head from "next/head";
import Header from "@/parts/Header";
import Hero from "@/parts/Hero";


function Home() {
  return (
      <>
        <Head>
          <title>COURSE WEB APP</title>
        </Head>

        <main>
          <section className="header-clipping pt-10 min-h-screen md:min-h-0">
            <div className="sunshine max-w-full"></div>

            <div className="container mx-auto px-4">
              <Header onLight={true}></Header>
              <Hero></Hero>
            </div>
          </section>
        </main>
      </>
  );
}

export default Home;
