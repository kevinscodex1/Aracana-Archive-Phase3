import PageComponent from "../components/PageComponent";

export default function Plans() {
    return (
        <PageComponent title="Subscription Plans">
            <>
                <section id="plans">
                    <div className="w-full py-[10rem] px-4 bg-[#fbf7f1] text-white">
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
                                        ✓ Ad-free on browsing and reading for
                                        all devices
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ Access to updated translated works
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ 150 words/month on translation and
                                        editing services
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
                                        ✓ Ad-free on browsing and reading for
                                        all devices
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ Access to updated translated works
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ 500 words/month on translation and
                                        editing services
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ 1 commision-free artwork/month from
                                        our graphic designers
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
                                        ✓ Ad-free on browsing and reading for
                                        all devices
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ Access to updated translated works
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ 1500 words/month on translation and
                                        editing services
                                    </p>
                                    <p className="py-2 border-b mx-8">
                                        ✓ 2 commision-free artwork/month from
                                        our graphic designers.
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
            </>
        </PageComponent>
    );
}
