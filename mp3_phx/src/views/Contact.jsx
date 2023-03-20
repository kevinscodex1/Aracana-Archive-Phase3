import PageComponent from "../components/PageComponent";
import { Link } from "react-router-dom";
import magicCodex from "../assets/img/magical_books.jpg";
import "../sub.css";
import "../body.css";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
export default function Contact() {
    return (
        <PageComponent title="Contacts Page">
            <>
                <section id="contact">
                    <div className="grid md:grid-cols-2">
                        <div className="m-auto md:pl-20 p-4 py-16 max-w-[1240px] text-white flex flex-col">
                            <h1 className="py-4 text-4xl font-bold text-center text-amber-500">
                                Contact Us
                            </h1>
                            <form
                                action="https://getform.io/f/46257f75-f932-4274-9e7b-7400ad1d11e8"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-4 rounded-lg p-3 flex border-amber-500 text-black"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Mobile No.
                                        </label>
                                        <input
                                            className="border-4 rounded-lg p-3 flex border-amber-500 text-black"
                                            type="text"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        className="border-4 rounded-lg p-3 flex border-amber-500 text-black"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        className="border-4 rounded-lg p-3 flex border-amber-500 text-black"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-4 rounded-lg p-3 border-amber-500 text-black"
                                        row="10"
                                        name="message"
                                    />
                                </div>
                                <button className="glow mt-4 w-full p-4 rounded">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="m-auto md:pl-20 p-4 py-16 max-w-[1240px] text-white flex flex-col">
                            <h1 className="py-4 text-4xl font-bold text-center text-amber-500">
                                Our Social Media
                            </h1>
                            <a href="https://twitter.com/ArcanaArchive23">
                                <button className="glow mt-4 my-10 w-full p-4 rounded">
                                    <FaTwitterSquare
                                        className="float-left"
                                        size={35}
                                    />
                                    <p className="text-xs m-auto mt-3 ">
                                        https://twitter.com
                                    </p>
                                </button>
                            </a>
                            <a href="https://www.youtube.com/channel/UCQwmCv4wx2SiHOStBLnh9UQ">
                                <button className="glow mt-4 my-10 w-full p-4 rounded">
                                    <FaYoutubeSquare
                                        className="float-left"
                                        size={35}
                                    />
                                    <p className="text-xs m-auto mt-3 ">
                                        https://youtube.com
                                    </p>
                                </button>
                            </a>
                            <a href="https://www.instagram.com/arcanaarchive23/">
                                <button className="glow mt-4 my-10 w-full p-4 rounded">
                                    <FaInstagram
                                        className="float-left"
                                        size={35}
                                    />
                                    <p className="text-xs m-auto mt-3 ">
                                        https://instagram.com
                                    </p>
                                </button>
                            </a>
                            <a href="https://www.facebook.com/people/Arcana/100090858206555/">
                                <button className="glow mt-4 my-10 w-full p-4 rounded">
                                    <FaFacebookSquare
                                        className="float-left"
                                        size={35}
                                    />
                                    <p className="text-xs m-auto mt-3 ">
                                        https://facebook.com
                                    </p>
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </>
        </PageComponent>
    );
}
