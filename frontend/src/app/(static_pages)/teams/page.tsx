import { TeamsPageHeader } from "@/modules/teams/header";
import { TeamsHeroSection } from "@/modules/teams/hero";
import { TeamsInfoSection } from "@/modules/teams/teams-info";
import { TeamsMemberSection } from "@/modules/teams/teams-members";
import { Metadata } from "next";

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
            </main>
        </>
    );
};

export default TeamsPage;
