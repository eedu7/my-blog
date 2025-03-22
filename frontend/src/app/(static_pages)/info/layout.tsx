import React from "react";

import { InfoNavbar } from "@/modules/info/navbar";
import { InfoPageFooter } from "@/modules/info/footer";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="p-4">
				<InfoNavbar />
			</header>
			<main className="flex-grow space-y-8 grid lg:grid-cols-2 justify-center items-center max-w-7xl mx-auto p-4">
				{children}
			</main>
			<div className="divider h-0.5"></div>
			<footer className="p-2">
				<InfoPageFooter />
			</footer>
		</div>
	);
};

export default HomeLayout;
