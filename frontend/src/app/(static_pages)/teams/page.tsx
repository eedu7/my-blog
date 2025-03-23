import { INFO_LINK, MembershipPageFooterLinks } from "@/constants/navbars";
import { GetInTouchSection } from "@/modules/teams/get-in-touch";
import { TeamsPageHeader } from "@/modules/teams/header";
import { TeamsHeroSection } from "@/modules/teams/hero";
import { TeamsInfoSection } from "@/modules/teams/teams-info";
import { TeamsMemberSection } from "@/modules/teams/teams-members";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Medium for Teams",
};

const TeamsPage = () => {
    return (
        <>
            <TeamsPageHeader />
            <main className="font-serif">
                <TeamsHeroSection />
                <TeamsMemberSection />
                <TeamsInfoSection />
                <GetInTouchSection />
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

export default TeamsPage;
