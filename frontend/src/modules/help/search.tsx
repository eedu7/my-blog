import { SearchIcon } from "lucide-react";
import Link from "next/link";

export const HelpSearchSection = () => {
    return (
        <section className="h-96">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-8">
                <h1 className="text-2xl md:text-4xl">How can we help?</h1>
                <div className="group relative md:w-96">
                    <input
                        className="group w-full rounded-full border border-gray-500 p-2 pl-6 group-hover:border-gray-800 md:p-2 md:pl-4 md:pl-8"
                        type="text"
                        placeholder="Search"
                    />
                    <SearchIcon className="absolute inset-0 top-3 left-1.5 size-4 text-gray-500 group-hover:text-gray-800 md:top-2.5 md:size-6" />
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs">Popular:</p>
                    <div className="flexflex-wrap flex items-center gap-1 text-xs md:gap-2 md:text-sm">
                        {/* TODO: Add links of these */}
                        <Link className="link underline-offset-4" href="#">
                            Gifting
                        </Link>
                        <Link className="link underline-offset-4" href="#">
                            Membership
                        </Link>
                        <Link className="link underline-offset-4" href="#">
                            Partner Program
                        </Link>
                        <Link
                            className="link underline-offset-4"
                            href="/sign-in"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
