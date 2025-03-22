import Link from "next/link";

const HelpPageNavbarLargerScreenLinks = () => {
    // Navigation Bar for Larger screen
    return (
        <div className="hidden items-center space-x-2.5 md:flex">
            <Link
                className="link link-hover text-sm underline-offset-2"
                href="/info"
            >
                Back to myblog.info
            </Link>
            {/* TODO: Add the link to the new request in the help center */}
            <Link
                href="#"
                className="btn btn-outline rounded-full border-gray-300 text-sm"
            >
                Submit a request
            </Link>
        </div>
    );
};

const HelpPageNavbarSmallerScreenLinks = () => {
    return (
        <div className="flex-none md:hidden">
            <div className="drawer drawer-end">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-square btn-ghos"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>{" "}
                        </svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-64">
                        {/* Sidebar content here */}
                        <li className="flex items-center justify-center text-xl font-semibold">
                            MyBlog Help Center
                        </li>
                        <li>
                            <div className="divider divider-start" />
                        </li>
                        <li className="flex items-center justify-center">
                            <Link className="link link-hover" href="/info">
                                Back to myblog.info
                            </Link>
                        </li>
                        <li>
                            <div className="divider">OR</div>
                        </li>
                        <li>
                            {/* TODO: Add the link to the new request in the help center */}
                            <Link
                                href="#"
                                className="link link-hover btn btn-link"
                            >
                                Submit a request
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const HelpPageNavbar = () => {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
            <div className="flex items-center gap-2">
                <a href="#">
                    <h1 className="text-3xl">MyBlog</h1>
                </a>
                <small className="hidden md:flex">Help Center</small>
            </div>
            {/* Navigation Bar for Larger screen */}
            <HelpPageNavbarLargerScreenLinks />
            {/* Navigation Bar for smaller screen */}
            <HelpPageNavbarSmallerScreenLinks />
        </nav>
    );
};
