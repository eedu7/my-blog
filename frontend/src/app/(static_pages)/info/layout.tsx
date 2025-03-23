import React from "react";

import { InfoNavbar } from "@/modules/info/navbar";
import { InfoPageFooter } from "@/modules/info/footer";

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-gray-900 p-4 text-gray-200">
                <InfoNavbar />
            </header>
            <main className="mx-auto grid max-w-7xl flex-grow items-center justify-center space-y-8 p-4 lg:grid-cols-2">
                {children}
            </main>
            <footer className="bg-gray-900 p-4 text-gray-200">
                <InfoPageFooter />
            </footer>
        </div>
    );
};

export default HomeLayout;
