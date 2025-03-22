import { HelpPageNavbar } from "@/modules/help/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "MyBlog Help Center",
};

const HelpPage = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-800 text-white">
				<HelpPageNavbar />
			</header>
			<main className="flex-wrap">Hello World</main>
			<footer></footer>
		</div>
	);
};

export default HelpPage;
