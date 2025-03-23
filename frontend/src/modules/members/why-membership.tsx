import React from "react";

export const WhyMembership = () => {
    return (
        <section className="flex flex-col space-y-4 space-x-12 p-8 font-serif md:space-y-8 xl:flex-row">
            <div className="w-3/12">
                <h1 className="text-4xl md:text-6xl">Why membership?</h1>
            </div>
            <div className="relative space-y-4 md:w-[44rem] md:space-y-16 xl:left-12">
                <div className="space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-medium md:text-4xl">Reward writers</h1>
                    <p className="text-sm text-gray-900 md:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; Your membership directly supports the writers,
                        editors, curators, and teams who make MyBlog a vibrant, inclusive home for
                        human stories. A portion of your membership is allocated to the writers of
                        the stories you read and interact with.
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-medium md:text-4xl">Unlock every story</h1>
                    <p className="text-sm text-gray-900 md:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; Get access to millions of original stories that
                        spark bright ideas, answer big questions, and fuel bold ambitions.
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-medium md:text-4xl">
                        Enhance your reading experience
                    </h1>
                    <p className="text-sm text-gray-900 md:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; Immerse yourself in audio stories, read offline
                        wherever you go, and connect with the Medium community on Mastodon.
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-medium md:text-4xl">Elevate your writing</h1>
                    <p className="text-sm text-gray-900 md:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; Create and contribute to publications to
                        collaborate with other writers, create a custom domain for your profile, and
                        level up your writing with our simple but powerful publishing tools.
                    </p>
                </div>
                <div className="space-y-2 md:space-y-4">
                    <h1 className="text-2xl font-medium md:text-4xl">
                        Support a mission that matters
                    </h1>
                    <p className="text-sm text-gray-900 md:text-xl">
                        &nbsp;&nbsp;&nbsp;&nbsp; Members are creating a world where original,
                        human-crafted stories thrive. As a member-supported platform, quality comes
                        first, not ads or clickbait.
                    </p>
                </div>
            </div>
        </section>
    );
};
