import { SearchIcon } from "lucide-react";
import Link from "next/link";

export const HelpSearchSection = () => {
    return (
        <section className="h-96">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-8">
                <h1 className="text-2xl md:text-4xl">How can we help?</h1>
                <div className="group relative md:w-96">
                    <input
                        className="group w-full rounded-full border border-gray-500 p-2 pl-4 group-hover:border-gray-800 md:p-2 md:pl-8"
                        type="text"
                        placeholder="Search"
                    />
                    <SearchIcon className="absolute inset-0 top-2.5 left-1 size-6 text-gray-500 group-hover:text-gray-800" />
                </div>
                <div className="flex items-center gap-2">
                    <p>Popular:</p>
                    <div className="flex items-center gap-2 text-sm">
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
