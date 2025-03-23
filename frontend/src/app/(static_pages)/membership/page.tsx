import { MembershipPageFooterLinks } from "@/constants/navbars";
import { MembershipPageHeader } from "@/modules/members/header";
import { MemberShipHeroSection } from "@/modules/members/hero";
import { HeartHandshakeIcon, StarIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "MyBlog Membership",
};

const MemberShipPage = () => {
    return (
        <>
            <MembershipPageHeader />
            <main>
                <MemberShipHeroSection />
                {/* Why membership section */}
                <section className="flex flex-col space-y-4 space-x-12 p-8 font-serif md:space-y-8 xl:flex-row">
                    <div className="w-3/12">
                        <h1 className="text-4xl md:text-6xl">Why membership?</h1>
                    </div>
                    <div className="relative space-y-4 md:w-[44rem] md:space-y-16 xl:left-12">
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-medium md:text-4xl">Reward writers</h1>
                            <p className="text-sm text-gray-900 md:text-xl">
                                &nbsp;&nbsp;&nbsp;&nbsp; Your membership directly supports the
                                writers, editors, curators, and teams who make MyBlog a vibrant,
                                inclusive home for human stories. A portion of your membership is
                                allocated to the writers of the stories you read and interact with.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-medium md:text-4xl">Unlock every story</h1>
                            <p className="text-sm text-gray-900 md:text-xl">
                                &nbsp;&nbsp;&nbsp;&nbsp; Get access to millions of original stories
                                that spark bright ideas, answer big questions, and fuel bold
                                ambitions.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-medium md:text-4xl">
                                Enhance your reading experience
                            </h1>
                            <p className="text-sm text-gray-900 md:text-xl">
                                &nbsp;&nbsp;&nbsp;&nbsp; Immerse yourself in audio stories, read
                                offline wherever you go, and connect with the Medium community on
                                Mastodon.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-medium md:text-4xl">
                                Elevate your writing
                            </h1>
                            <p className="text-sm text-gray-900 md:text-xl">
                                &nbsp;&nbsp;&nbsp;&nbsp; Create and contribute to publications to
                                collaborate with other writers, create a custom domain for your
                                profile, and level up your writing with our simple but powerful
                                publishing tools.
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-2xl font-medium md:text-4xl">
                                Support a mission that matters
                            </h1>
                            <p className="text-sm text-gray-900 md:text-xl">
                                &nbsp;&nbsp;&nbsp;&nbsp; Members are creating a world where
                                original, human-crafted stories thrive. As a member-supported
                                platform, quality comes first, not ads or clickbait.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="divider divider-start"></div>
                {/* Membership Plans */}
                <section
                    id="plan"
                    className="flex flex-col space-y-4 space-x-12 p-2 font-serif md:space-y-8 md:p-8 xl:flex-row"
                >
                    <div className="w-3/12 p-4">
                        <h1 className="text-4xl md:text-6xl">Membership plans</h1>
                    </div>
                    <div className="relative space-y-4 p-2 md:space-y-16 md:p-4 xl:left-12">
                        <div className="justify-between gap-4 space-y-8 md:flex">
                            <div className="card shadow-md md:h-[38rem] md:w-96 md:p-8 lg:h-[40rem]">
                                <div className="space-y-8">
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <StarIcon className="size-10 text-yellow-500" />
                                        <h1 className="card-title">MyBlog Member</h1>
                                        <p>$5/month or $60/year</p>
                                    </div>
                                    {/* TODO: Add the payment or check what the Medium.com do after user is signed in and click on this */}
                                    <button className="btn btn-primary btn-sm btn-soft w-full p-4">
                                        Get started
                                    </button>
                                </div>
                                <div className="divider divider-start"></div>
                                <div className="card-body">
                                    <ul className="space-y-4">
                                        <li className="before:mr-2 before:text-rose-800 before:content-['✔']">
                                            Read member-only stories
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Support writers you read most
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Earn money for your writing
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Listen to audio narrations
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Read offline with the MyBlog.app
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Access our Mastodon community
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Connect your custom domain
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Create your own publications
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card shadow-md md:h-[38rem] md:w-96 md:p-8 lg:h-[40rem]">
                                <div className="space-y-8">
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <HeartHandshakeIcon className="size-10 text-yellow-500" />
                                        <h1 className="card-title">Friend of MyBlog</h1>
                                        <p>$15/month or $150/year</p>
                                    </div>
                                    {/* TODO: Add the payment or check what the Medium.com do after user is signed in and click on this */}
                                    <button className="btn btn-primary btn-sm btn-soft w-full p-4">
                                        Get started
                                    </button>
                                </div>
                                <div className="card-body">
                                    <div className="divider divider-start"></div>
                                    <div className="flex items-center gap-2">
                                        <StarIcon className="size-4 text-yellow-500" />
                                        <p className="text-sm">All MyBlog member benefits</p>
                                    </div>
                                    <div className="divider text-gray-600">PLUS</div>
                                    <ul className="space-y-4">
                                        <li className="w-full before:mr-2 before:text-green-500 before:content-['✔']">
                                            Give 4x more to the writers you read
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Share member-only stories with anyone and drive more
                                            earnings for writers
                                        </li>
                                        <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                            Customize app icon
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Getting starting */}
                <section>
                    <h1>Unlock a world of wisdom</h1>
                    {/* TODO: Just like how you implemented the `Get started` button above in hero section */}
                    <button>Get started</button>
                </section>
            </main>
            <footer>
                <h1>MyBlog</h1>
                <ul>
                    {MembershipPageFooterLinks.map(({ id, title, href }) => (
                        <li key={id}>
                            <Link href={href}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
};

export default MemberShipPage;
