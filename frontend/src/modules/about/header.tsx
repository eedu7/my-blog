import { AboutPageNavLinks, INFO_LINK } from "@/constants/navbars";

import Link from "next/link";

export const AboutPageHeader = () => {
    const { href, title } = INFO_LINK;
    const [SignIn, SignUp] = AboutPageNavLinks;

    return (
        <header className="bg-gray-800 text-gray-200">
            <nav className="flex items-center justify-between p-2 md:p-4 lg:p-6">
                <Link href={href}>
                    <h1 className="text-xl font-semibold md:text-4xl">{title}</h1>
                </Link>
                <div className="space-x-4">
                    {/* TODO: Add the sign in and sign up modals */}
                    <a href={SignIn.href} className="btn btn-sm md:btn-md btn-outline p-2">
                        {SignIn.title}
                    </a>
                    <a href={SignUp.href} className="btn btn-sm btn-outline md:btn-md btn-soft p-2">
                        {SignUp.title}
                    </a>
                </div>
            </nav>
            <div className="divider divider-start my-0 h-1"></div>
        </header>
    );
};
