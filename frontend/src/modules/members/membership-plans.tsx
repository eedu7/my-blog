import { HeartHandshakeIcon, StarIcon } from "lucide-react";

export const MembershipPlans = () => {
    return (
        <section
            id="plan"
            className="flex flex-col space-y-4 space-x-12 p-2 font-serif md:space-y-8 md:p-8 xl:flex-row"
        >
            <div className="w-3/12 p-4">
                <h1 className="text-4xl md:text-6xl">Membership plans</h1>
            </div>
            <div className="relative space-y-4 p-2 md:space-y-16 md:p-4 xl:left-12">
                <div className="justify-between gap-4 space-y-8 md:flex">
                    <div className="card shadow-md md:h-[38rem] md:w-96 md:p-8 lg:h-[40rem]">
                        <div className="space-y-8">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <StarIcon className="size-10 text-yellow-500" />
                                <h1 className="card-title">MyBlog Member</h1>
                                <p>$5/month or $60/year</p>
                            </div>
                            {/* TODO: Add the payment or check what the Medium.com do after user is signed in and click on this */}
                            <button className="btn btn-primary btn-sm btn-soft w-full p-4">
                                Get started
                            </button>
                        </div>
                        <div className="divider divider-start"></div>
                        <div className="card-body">
                            <ul className="space-y-4">
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Read member-only stories
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Support writers you read most
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Earn money for your writing
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Listen to audio narrations
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Read offline with the MyBlog.app
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Access our Mastodon community
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Connect your custom domain
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Create your own publications
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card shadow-md md:h-[38rem] md:w-96 md:p-8 lg:h-[40rem]">
                        <div className="space-y-8">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <HeartHandshakeIcon className="size-10 text-yellow-500" />
                                <h1 className="card-title">Friend of MyBlog</h1>
                                <p>$15/month or $150/year</p>
                            </div>
                            {/* TODO: Add the payment or check what the Medium.com do after user is signed in and click on this */}
                            <button className="btn btn-primary btn-sm btn-soft w-full p-4">
                                Get started
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="divider divider-start"></div>
                            <div className="flex items-center gap-2">
                                <StarIcon className="size-4 text-yellow-500" />
                                <p className="text-sm">All MyBlog member benefits</p>
                            </div>
                            <div className="divider text-gray-600">PLUS</div>
                            <ul className="space-y-4">
                                <li className="w-full before:mr-2 before:text-green-500 before:content-['✔']">
                                    Give 4x more to the writers you read
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Share member-only stories with anyone and drive more earnings
                                    for writers
                                </li>
                                <li className="before:mr-2 before:text-green-500 before:content-['✔']">
                                    Customize app icon
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
