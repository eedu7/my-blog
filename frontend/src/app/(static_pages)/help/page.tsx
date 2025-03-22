import { HelpPageNavbar } from "@/modules/help/navbar";
import { Metadata } from "next";

import { HelpSearchSection } from "@/modules/help/search";
import { HelpCardSection } from "@/modules/help/help-card";

export const metadata: Metadata = {
    title: "MyBlog Help Center",
};

const HelpPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-gray-800 text-white">
                <HelpPageNavbar />
            </header>
            <main>
                <HelpSearchSection />
                <HelpCardSection />
            </main>
            <footer></footer>
        </div>
    );
};

export default HelpPage;
