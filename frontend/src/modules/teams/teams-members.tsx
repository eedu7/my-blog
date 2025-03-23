import React from "react";

export const TeamsMemberSection = () => {
    return (
        <>
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-4 py-8 md:space-y-8 md:py-16">
                <div className="px-8 md:mb-16 md:px-0">
                    <h1 className="p-4 text-2xl md:w-[32rem] md:p-0 md:text-4xl">
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
