import { GreenForest } from "@/constants/images";
import Image from "next/image";

export const MemberShipHeroSection = () => {
    return (
        <section className="space-y-4 p-2 md:flex md:h-[34rem] lg:p-4">
            <div className="flex flex-col justify-between space-y-6 p-4 md:w-7/12 md:space-y-8 md:p-8 lg:w-8/12 xl:p-18">
                <h1 className="text-2xl font-semibold text-gray-800 md:text-6xl">
                    Support human stories
                </h1>
                <div className="space-y-6 md:space-y-8 lg:w-8/12">
                    <p className="text-sm text-gray-600 md:text-lg">
                        Become a member to read without limits or ads, fund great writers, and join
                        a global community of people who care about high-quality storytelling.
                    </p>
                    <div className="space-x-4">
                        <button className="btn btn-sm md:btn-md btn-outline">Get started</button>
                        <a href="#plan" className="btn btn-sm md:btn-md btn-outline btn-soft">
                            View plans
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-72 rounded md:h-auto md:w-5/12 lg:w-4/12">
                <Image
                    src={GreenForest}
                    alt="Grren Forest"
                    className="h-full w-full rounded object-cover"
                />
            </div>
        </section>
    );
};
