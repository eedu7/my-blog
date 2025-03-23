import React from "react";

export const TeamsHeroSection = () => {
    return (
        <section className="flex items-center justify-start border-b bg-linear-to-bl from-violet-400 to-fuchsia-400 p-4 pt-16 text-gray-100 md:h-[36rem] md:pt-0 lg:justify-center">
            <div className="w-[28rem] space-y-8 md:space-y-16 lg:w-[36rem]">
                <h1 className="w text-4xl md:text-6xl">MyBlog for Teams</h1>
                <p className="text-lg md:text-xl">
                    Explore a library of insights from industry experts
                </p>
                <p className="md:text-lg">
                    Unlock actionable advice to level up your team. Written by experts with
                    real-world experience, curated by MyBlog.
                </p>
                <a href="#get-in-touch" className="btn btn-sm md:btn-md btn-primary bg-violet-800">
                    Get in touch
                </a>
            </div>
        </section>
    );
};
