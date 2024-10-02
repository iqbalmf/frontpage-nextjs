import React from 'react';
import Head from "next/head";
import Header from "@/parts/Header";
import Footer from "@/parts/Footer";
import courseApi from "@/constant/api/courses";
import ListCourse from "@/parts/ListCourse";
import Course from "@/model/courses";

interface CoursesProps {
    courses: Course[];
}

const Courses = ({courses}: CoursesProps) => {
    return (
        <>
            <Head>
                <title>Library Courses</title>
            </Head>
            <main>
                <section className={'pt-10 relative z-30'} style={{height: 360}}>
                    <div className={"absolute inset-0 z-0 w-full h-full bg-indigo-900"}/>
                    <div
                        className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
                        style={{marginBottom: "-25px"}}
                    >
                        <div className="px-4 space-y-2">
                            <h3 className="text-6xl text-center text-teal-500 font-semibold">
                                Library
                            </h3>
                            <h4 className="text-lg text-center text-white">
                                Don&#39;t get left behind in the tech race.<br/>Stay ahead and keep up with the latest
                                tech trends!
                            </h4>
                            <div className="flex flex-col relative">
                                <input
                                    id="q"
                                    type="text"
                                    className="bg-whitefocus:outline-none transition-all duration-200 focus:border-teal-500 border border-gray-600 px-4 py-3 w-full mt-6"
                                    placeholder={"Lagi nyari kelas apa?"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="container px-4 mx-auto z-10 relative">
                        <Header onLight={false}></Header>
                    </div>
                </section>
                <section className={"container mx-auto pt-24"}>
                    <ListCourse dataCourse={courses}></ListCourse>
                </section>
                <section className={"w-full mt-24 bg-indigo-950 py-12"}>
                    <Footer></Footer>
                </section>
            </main>
        </>
    );
};


Courses.getInitialProps = async () => {
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

export default Courses;