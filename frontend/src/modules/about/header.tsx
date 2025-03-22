import Link from "next/link";
import React from "react";

export const AboutPageHeader = () => {
    return (
        <header>
            <nav className="flex items-center justify-between p-2 md:p-4 lg:p-6">
                <Link href="/info">
                    <h1 className="text-xl font-semibold md:text-4xl">
                        MyBlog
                    </h1>
                </Link>
                <div className="space-x-4">
                    {/* TODO: Add the sign in and sign up modals */}
                    <button
                        type="submit"
                        className="btn btn-sm md:btn-md btn-outline p-2"
                    >
                        Sign in
                    </button>
                    <button
                        type="submit"
                        className="btn btn-sm btn-outline md:btn-md btn-soft p-2"
                    >
                        Sign up
                    </button>
                </div>
            </nav>
            <div className="divider divider-start my-0 h-1"></div>
        </header>
    );
};
