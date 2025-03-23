import { HELP_LINK } from "@/constants/navbars";
import Link from "next/link";
import React from "react";

export const GetInTouchSection = () => {
    return (
        <section id="get-in-touch" className="border-t border-b border-gray-400 p-4">
            <div className="mx-auto flex h-32 max-w-7xl flex-col justify-center gap-4 md:h-64 md:items-center md:gap-16">
                <h1 className="text-2xl md:text-4xl">
                    Interested in learning more about MyBlog for Teams?
                </h1>
                <p className="text-sm md:text-lg">
                    Submit a request to our{" "}
                    <Link className="link underline-offset-2" href={HELP_LINK.href}>
                        Help Center
                    </Link>
                </p>
            </div>
        </section>
    );
};
