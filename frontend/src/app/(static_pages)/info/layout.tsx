import React from "react";

import { InfoNavbar } from "@/modules/info/navbar";
import { InfoPageFooter } from "@/modules/info/footer";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<>
			<header className="px-4">
				<InfoNavbar />
				<div className="divider"></div>
			</header>
			<main className="grid grid-cols-2 justify-center items-center max-w-7xl mx-auto p-4 my-8">
				{children}
			</main>
			<footer>
				<div className="divider"></div>
				<InfoPageFooter />
			</footer>
		</>
	);
};

export default HomeLayout;
