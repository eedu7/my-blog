import { TeamsPageHeader } from "@/modules/teams/header";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "Medium for Teams",
};

const TeamsPage = () => {
    return (
        <>
            <TeamsPageHeader />
            <main className="font-serif">
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
                        <a
                            href="#get-in-touch"
                            className="btn btn-sm md:btn-md btn-primary bg-violet-800"
                        >
                            Get in touch
                        </a>
                    </div>
                </section>
                <section className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-4 py-8 md:space-y-8 md:py-16">
                    <div className="px-6 md:mb-16 md:px-0">
                        <h1 className="text-lg tracking-widest md:w-[34rem] md:text-2xl lg:text-4xl">
                            Actionable ideas and isights from industry leaders
                        </h1>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2 md:gap-[4rem] lg:grid-cols-3">
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                        <TeamsProfileCard />
                    </div>
                </section>
            </main>
        </>
    );
};

const TeamsProfileCard = () => {
    return (
        <div className="flex flex-col gap-4 border-b border-gray-400 pb-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-36"></div>
                </div>
            </div>
        </div>
    );
};

export default TeamsPage;
