import Head from "next/head";
import Header from "@/parts/Header";
import Hero from "@/parts/Hero";
import Clients from "@/parts/Clients";
import ListCourse from "@/parts/ListCourse";
import ListCategories  from "@/parts/ListCategories";
import courseApi from "@/constant/api/courses";
import Course from "@/model/courses";

interface HomeProps {
    courses: Course[];
}

const Home = ({courses}: HomeProps) => {
    console.log(`HOME ${courses}`)
    return (
        <>
            <Head>
                <title>COURSE WEB APP</title>
            </Head>

            <main>
                <section className="header-clipping pt-10 min-h-screen md:min-h-0">
                    <div className="max-w-full"></div>

                    <div className="container mx-auto px-4">
                        <Header onLight={true}></Header>
                        <Hero></Hero>
                    </div>
                </section>
                <section>
                    <section className="container mx-auto pt-24">
                        <Clients></Clients>
                    </section>
                </section>
                <section>
                    <section className={"container mx-auto pt-24"}>
                        <ListCourse dataCourse={courses}></ListCourse>
                    </section>
                </section>
                <section>
                    <section className={"container mx-auto pt-24"}>
                        <ListCategories></ListCategories>
                    </section>
                </section>
            </main>
        </>
    );
}

Home.getInitialProps = async () => {
    let courses = [];
    try {
        const response = await courseApi.all();
        courses = response || [];
        return {
            courses
        }
    } catch (error) {
        console.error("Error fetching courses:", error);
    }
};

export default Home;
