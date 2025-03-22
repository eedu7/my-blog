import { HelpPageNavbar } from "@/modules/help/navbar";
import { Metadata } from "next";

import { HelpSearchSection } from "@/modules/help/search";
import { HelpCardSection } from "@/modules/help/help-card";
import { helpPageFooterLinks } from "@/constants/navbars";
import Link from "next/link";

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
                <section className="mt-8 flex h-44 flex-col items-center justify-center gap-8 bg-gray-100 p-2 md:h-64">
                    <p className="text-center text-xl md:text-4xl">
                        Can't find what you're looking for?
                    </p>
                    {/* TODO: Added a mailto link, to submit a help request */}
                    <button className="btn btn-xs btn-primary text-xs">
                        Submit a request
                    </button>
                </section>
            </main>
            <footer className="bg-gray-800 p-2 text-white">
                <nav>
                    <ul className="flex items-center justify-end gap-4 text-[0.47rem] sm:text-sm">
                        {helpPageFooterLinks.map(({ id, title, href }) => (
                            <li key={id}>
                                <Link
                                    href={href}
                                    className="link link-hover underline-offset-2"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default HelpPage;
