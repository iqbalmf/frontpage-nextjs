import React from 'react';
import Link from "next/link";

function Footer() {
    function submit() {}
    return (
        <footer className={"container mx-auto"}>
            <div className="flex justify-between pb-5">
                <div className="w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>API
                                Developer</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""}
                                  className={"text-indigo-500 hover:text-teal-300 hover:underline"}>Career</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>Our
                                Story</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>New
                                Soon</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Student</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>Get
                                Scholarship</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""}
                                  className={"text-indigo-500 hover:text-teal-300 hover:underline"}>Our
                                Pathskills</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>All
                                Features</Link>
                        </li>
                        <li className="mt-2">
                            <Link href={""} className={"text-indigo-500 hover:text-teal-300 hover:underline"}>Refund
                                Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Touch Us</h6>
                    <p className={"text-indigo-500 mt-3 leading-loose"}>
                        Micro Center <br/>
                        Alleysi Block C No.12 <br/>
                        Jakarta Selatan, Indonesia <br/>
                        +21 0011 2233
                    </p>
                </div>
                <div className="w-2/6">
                    <h6 className="text-white">Promotions</h6>
                    <p className={"mt-4 text-indigo-500"}> Submit your email for new updates
                    </p>
                    <form onSubmit={submit}>
                        <input
                            type="text"
                            className="bg-white focus:outline-none border-0 px-6 py-3 mt-6 md:w-1/2"
                            placeholder="Your email addres"
                        />
                        <button
                            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t pt-8 mt-10 border-gray-500 text-center">
                <p className="text-indigo-500">
                    {new Date().getFullYear()} &copy; <span className={"font-bold text-white"}>IqbalFauzan</span> All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;