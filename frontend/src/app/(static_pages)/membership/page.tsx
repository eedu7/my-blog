import { MembershipPageFooterLinks } from "@/constants/navbars";
import { MembershipPageHeader } from "@/modules/members/header";
import { MemberShipHeroSection } from "@/modules/members/hero";
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
                {/* Membership Plans */}
                <section id="plan">
                    <div>
                        <h1>Membership plans</h1>
                    </div>
                    <div>
                        <div>
                            <div className="card-title">MyBlog Member</div>
                            <div className="card-body"></div>
                        </div>
                        <div>
                            <div className="card-title">Friend of MyBlog</div>
                            <div className="card-body"></div>
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
