import { INFO_LINK, MembershipPageFooterLinks } from "@/constants/navbars";
import { MembershipPageHeader } from "@/modules/members/header";
import { MemberShipHeroSection } from "@/modules/members/hero";
import { MembershipPlans } from "@/modules/members/membership-plans";
import { WhyMembership } from "@/modules/members/why-membership";
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
                <WhyMembership />
                <div className="divider divider-start"></div>
                <MembershipPlans />
                <section className="flex h-44 flex-col items-center justify-center gap-8 border-t border-gray-300">
                    <h1 className="text-2xl md:text-4xl">Unlock a world of wisdom</h1>
                    {/* TODO: Just like how you implemented the `Get started` button above in hero section */}
                    <button className="btn btn-sm md:btn-md btn-outline">Get started</button>
                </section>
            </main>
            <footer className="flex flex-col items-center justify-between space-y-2 bg-gray-800 p-2 text-gray-200 md:flex-row">
                <Link href={INFO_LINK.href}>
                    <h1 className="text-2xl md:text-4xl">MyBlog</h1>
                </Link>
                <ul className="flex gap-2 text-xs md:text-sm">
                    {MembershipPageFooterLinks.map(({ id, title, href }) => (
                        <li key={id}>
                            <Link href={href} className="link underline-offset-2">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
};

export default MemberShipPage;
