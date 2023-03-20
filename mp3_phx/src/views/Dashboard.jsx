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
export default function Dashboard() {
    return (
        <>
            <section id="hero">
                <div className="text-white">
                    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                        <p className="font-bold p-2">
                            WELCOME TO THE{" "}
                            <span className="text-amber-500"> ARCANA</span>{" "}
                            ARCHIVE
                        </p>
                        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                            Make your own World
                        </h1>
                        <div className="flex justify-center items-center">
                            <p className="md:text-5xl sm:text-4xl text-xl font bold py-4">
                                Endless
                            </p>
                            <p className="md:text-5xl sm:text-4xl text-xl font bold pl-3 text-amber-500">
                                Possibilities
                            </p>
                        </div>
                        <p className="md:text-2xl text-sm font-bold py-4">
                            Sign UP for free or Subscribe for 2 months
                            subscription
                            <br />
                            and a lot more for as low as ₱149.00
                        </p>
                        <div className="grid gap-8 items-start mt-4 justify-center  md:text-sm">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFDF71] via-[#F7934C] to-[#CC5803]  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                                    <span className="flex items-center space-x-5">
                                        <Link to="/signup">
                                            <span className="pr-6 hover:text-amber-500">
                                                SIGN UP
                                            </span>
                                        </Link>
                                    </span>
                                    <a href="/home#plans">
                                        <span className="pl-6 hover:text-amber-500 transition duration-200">
                                            Check out Our Plans &rarr;
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-16" id="about">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  px-4">
                    <img
                        className="sm:w-[500px] mx-auto my-4 w-[300px]"
                        src={magicCodex}
                        alt="book of magics"
                    />
                    <div className="flex flex-col justify-center">
                        {/* <h1 classname="text-amber-500">About</h1> */}
                        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                            Avail the Archive's resources <br />
                            to better your writing
                        </h2>
                        <p>
                            We have top notch editors which can help cater to
                            your writing needs. Our resident translators can
                            team-up with you so your works can reach more
                            audiences. The Archive can also provide voice actors
                            for audiobook creation. These are just some of the
                            services available in The Archive; we have more
                            coming soon!{" "}
                            <span className="text-amber-500 font-semibold px-2">
                                Join our community
                            </span>{" "}
                            and be a part of our family as a reader, writer, VA,
                            or translator.
                        </p>
                        <button className="bg-black text-amber-500 w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 font-bold">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <section className="text-white" id="newsletter">
                <div className="w-full py-16 px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3">
                    <div className="lg:col-span-2 mt-5 mb-5">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl ">
                            Subscribe to our newsletter for updates on new
                            content, events, and promos
                        </h1>
                    </div>
                    <div className="my-1">
                        <div className="flex flex-col sm:flex-row items-center md:justify-between w-full text center">
                            <form
                                action="https://getform.io/f/46257f75-f932-4274-9e7b-7400ad1d11e8"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <input
                                    className="p-3 w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3rounded-md text-black flex"
                                    type="email"
                                    placeholder="Enter Email"
                                />
                                <button className="bg-amber-500 text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 ">
                                    <span className="text-center">
                                        Subscribe!
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="plans">
                <div className="w-full py-[10rem] px-4 bg-white text-white">
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-center flex flex-col justify-center text-black">
                        Select Your
                        <span className="text-amber-500"> PRIME</span>
                    </h1>
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-black hover:scale-105 duration-200">
                            <h2 className="text-center text-4xl font-bold text-amber-500 py-8">
                                Basic
                            </h2>
                            <p className="text-center text-2xl font-bold">
                                FREE
                                <br />1 account
                            </p>
                            <div className="font-medium text-center">
                                <p className="py-2 border-b mx-8">
                                    ✓ Ads while reading
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Access to free works only
                                </p>
                                <p className="py-2 border-b mx-8 mb-8">
                                    ✓ No translation or editing services
                                    available
                                </p>
                                <button className="bg-amber-500 text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center mt-20">
                                    Get Started
                                </button>
                                <p className="mx-8">
                                    <a href="t_c.html" id="footer_text">
                                        Terms and Conditions apply.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-black hover:scale-105 duration-200">
                            <h2 className="text-center text-4xl font-bold text-amber-500 pt-8 pb-3">
                                Apprentice
                            </h2>
                            <div className="text-center py-4">
                                <button className="bg-amber-500 py-2 text-xs w-80 text-center text-black rounded-lg font-semibold">
                                    One-time Payment available
                                </button>
                            </div>
                            <p className="text-center text-2xl font-bold">
                                ₱149/month after offer period
                                <br />1 account
                            </p>
                            <div className="font-medium text-center">
                                <p className="py-2 border-b mx-8">
                                    ✓ First 3 months for ₱149 (offer)
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Ad-free on browsing and reading for all
                                    devices
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Access to updated translated works
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ 150 words/month on translation and editing
                                    services
                                </p>
                                <button className="bg-amber-500 text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center">
                                    Get Started
                                </button>
                                <p className="mx-8 text-sm">
                                    <a href="t_c.html" id="footer_text">
                                        Terms and Conditions apply.
                                    </a>
                                </p>
                                <p className=" text-sm">
                                    Offer not available for users who have
                                    already tried PRIME.
                                </p>
                            </div>
                        </div>
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-black hover:scale-105 duration-200">
                            <h2 className="text-center text-4xl font-bold text-amber-500 pt-8 pb-3">
                                Master
                            </h2>
                            <div className="text-center py-4">
                                <button className="bg-amber-500 py-2 text-xs w-80 text-center text-black rounded-lg font-semibold">
                                    One-time Payment available
                                </button>
                            </div>
                            <p className="text-center text-2xl font-bold">
                                ₱300/month after offer period
                                <br />2 accounts for reading simultaneously
                            </p>
                            <div className="font-medium text-center">
                                <p className="py-2 border-b mx-8">
                                    ✓ First 3 months for ₱300 (offer)
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Ad-free on browsing and reading for all
                                    devices
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Access to updated translated works
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ 500 words/month on translation and editing
                                    services
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ 1 commision-free artwork/month from our
                                    graphic designers
                                </p>
                                <button className="bg-amber-500 text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 mt-20 text-center">
                                    Get Started
                                </button>
                                <p className="mx-8">
                                    <a href="t_c.html" id="footer_text">
                                        Terms and Conditions apply.
                                    </a>
                                </p>
                                <p className=" text-sm">
                                    Offer not available for users who have
                                    already tried PRIME.
                                </p>
                            </div>
                        </div>
                        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-black hover:scale-105 duration-200">
                            <h2 className="text-center text-4xl font-bold text-amber-500 pt-8 pb-3">
                                Exalted
                            </h2>
                            <div className="text-center py-4">
                                <button className="bg-amber-500 py-2 text-xs w-80 text-center text-black rounded-lg font-semibold">
                                    One-time Payment available
                                </button>
                            </div>
                            <p className="text-center text-2xl font-bold">
                                ₱750/month after offer period
                                <br />3 accounts for reading simultaneously
                            </p>
                            <div className="font-medium text-center">
                                <p className="py-2 border-b mx-8">
                                    ✓ First 3 months for ₱750 (offer)
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Ad-free on browsing and reading for all
                                    devices
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ Access to updated translated works
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ 1500 words/month on translation and
                                    editing services
                                </p>
                                <p className="py-2 border-b mx-8">
                                    ✓ 2 commision-free artwork/month from our
                                    graphic designers.
                                </p>
                                <p className="py-2 border-b mx-8">
                                    After 1 yr of being consistently
                                    <span className="text-amber-500 px-1">
                                        Exalted
                                    </span>
                                    you can apply for the
                                    <span className="text-amber-500 px-1">
                                        GOD-TIER
                                    </span>
                                    (coming soon) plan
                                </p>
                                <button className="bg-amber-500 text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-center">
                                    Get Started
                                </button>
                                <p className="mx-8">
                                    <a href="t_c.html" id="footer_text">
                                        Terms and Conditions apply.
                                    </a>
                                </p>
                                <p className=" text-sm">
                                    Offer not available for users who have
                                    already tried PRIME.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <FaInstagram className="float-left" size={35} />
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
    );
}
