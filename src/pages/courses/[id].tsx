import React from 'react';
import {CSSTransition} from "react-transition-group";
import Head from "next/head";
import courseApi from "@/constant/api/courses";
import Youtube from 'react-youtube';
import Header from "@/parts/Header";
import Feature from "@/parts/Details/Feature";
import Footer from "@/parts/Footer";
import Data from "@/model/DetailCourse";
import {useEffect, useRef, useState} from "react";
import CoursePhoto from "@/parts/Details/CoursePhoto";
import Chapter from "@/parts/Chapter";
import Review from "@/parts/Review";

const DetailCourses = ({data}: Data) => {
    const footer = useRef<HTMLElement | null>(null);
    const [isSticky, setIsSticky] = useState(() => true)
    useEffect(() => {
        const stickyMetaToggler = () => {
            if (footer.current) {
                const stickyOffsetTop = footer.current.getBoundingClientRect().top;
                setIsSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
            }
        };

        window.addEventListener("scroll", stickyMetaToggler);
        return () => {
            window.removeEventListener("scroll", stickyMetaToggler);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>MICRO</title>
            </Head>
            {/*HEADER BACKGROUND*/}
            <section className={'pt-10 relative overflow-hidden'} style={{height: 660}}>
                {
                    <div className={"video-wrapper"}>
                        <Youtube
                            videoId={"htnToY8qxac"}
                            id={"htnToY8qxac"}
                            opts={{
                                playerVars: {
                                    loop: 1,
                                    mute: 1,
                                    autoplay: 1,
                                    controls: 0,
                                    showinfo: 1,
                                    modestbranding: 1,
                                    rel: 0,
                                },
                            }}
                            onEnd={(event) => {
                                event.target.playVideo();
                            }}
                        ></Youtube>
                    </div>
                }
                <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
                <div className="absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-lg text-white">Online Class: </h3>
                        <h4 className="text-3xl md:text-6xl text-teal-500 font-semibold">
                            {`${data.course?.name ?? "-"}`}
                        </h4>
                    </div>
                </div>
                <div className="container mx-auto z-20 relative">
                    <Header onLight={false}></Header>
                </div>
            </section>
            {/*FEATURE*/}
            <section className={"container mx-auto pt-24 relative"}>
                <div className={"absolute transform -translate-y-1/2 top-0 w-full"}>
                    <div className="w-3/4 mx-auto">
                        <div className="flex justify-between">
                            <Feature data={{
                                icon: "/images/icon-nametag.svg",
                                meta: "Student",
                                value: `${data.totalStudent}`,
                            }}/>
                            <Feature data={{
                                icon: "/images/icon-playback.svg",
                                meta: "Video",
                                value: `${data.totalVideos}`,
                            }}/>
                            <Feature data={{
                                icon: "/images/icon-certificate.svg",
                                meta: "Certificate",
                                value: `${data.course?.certificate ? "Available" : "-"} `,
                            }}/>
                        </div>
                    </div>
                </div>
                <div>
                    <CSSTransition in={isSticky} timeout={300} classNames={"meta-price"} unmountOnExit={true}>
                        <div className="meta-price w-full bg-white z-50 left-0 py-3">
                            <div className="w-3/4 mx-auto">
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <h2 className={"text-gray-600"}>Nama Kelas</h2>
                                        <h3 className="text-2xl text-gray-900">{`${data.course?.name ?? "-"}`}</h3>
                                    </div>
                                    <h5 className="text-2xl text-teal-500 whitespace-nowrap mr-4">
                                        {data?.course?.type === 'free' ? "Free" : <span>Rp{data?.course?.price}</span>}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </section>
            {/*ABOUT COURSE*/}
            <div className="w-3/4 mx-auto mt-8">
                <div className="w-full md:w-3/4">
                    {/*Description*/}
                    <section>
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            About <span className="text-teal-500">Coures</span>
                        </h6>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
                            {data?.course?.description}
                        </p>
                    </section>
                    {/*Image Course*/}
                    <section className="mt-10">
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            Course <span className="text-teal-500">Photos</span>
                        </h6>
                        <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
                            {data?.imageCourse?.length > 0 ? (
                                data?.imageCourse?.map?.((photo, index) => (
                                    <CoursePhoto image={photo.image} key={index}/>
                                ))
                            ) : (
                                <div className="w-full text-center py-12">No Item Found</div>
                            )}
                        </div>
                    </section>
                    {/*Course - Lesson*/}
                    <section className="mt-10">
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            You Will <span className="text-teal-500">Learn</span>
                        </h6>
                        {
                            data?.chapters?.length > 0 ? (
                                <Chapter chapters={data.chapters}/>
                            ) : (
                                <div className="w-full text-center py-12">No Chapter Found</div>
                            )
                        }
                    </section>
                    {/*Instructor*/}
                    <section className="mt-10 w-full md:w-2/3">
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            Our <span className="text-teal-500">Instructor</span>
                        </h6>
                        <div className="flex items-center">
                            <img
                                src={data?.mentor?.profile ?? ""}
                                alt={data?.mentor?.name}
                                className="w-20 h-20 rounded-full overflow-hidden object-cover"
                            />
                            <div className="ml-4">
                                <h2 className="text-lg text-gray-900">
                                    {data?.mentor?.name ?? "Mentor's name"}
                                </h2>
                                <h3 className="text-sm text-gray-60">
                                    {data?.mentor?.profession}
                                </h3>
                            </div>
                        </div>
                    </section>
                    {/*Reviews*/}
                    <section className="mt-10 w-full md:w-6/12">
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            Happy <span className="text-teal-500">Students</span>
                        </h6>
                        {
                            data.reviews?.length > 0 ? (
                                <Review review={data.reviews}/>
                            ) : (
                                <div className="w-full text-center py-12">No Reviews Submitted</div>
                            )}
                    </section>
                </div>
            </div>
            {/*FOOTER*/}
            <section className={"mt-24 bg-indigo-950 py-12"} ref={footer}>
                <Footer></Footer>
            </section>
        </div>
    );
};

DetailCourses.getInitialProps = async (props: { query: { id: string; }; }) => {
    const id = props.query.id;
    try {
        const response = await courseApi.details(id);
        const data = response;
        return {data};
    } catch (error) {
        console.log("Error Fetching Detail Courses: ", error);
    }
}
export default DetailCourses;