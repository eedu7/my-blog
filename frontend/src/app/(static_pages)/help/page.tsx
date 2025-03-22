import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "MyBlog Help Center",
};

const HelpPage = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-800 text-white">
				<nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
					<div className="flex items-center gap-2">
						<a href="#">
							<h1 className="text-3xl">MyBlog</h1>
						</a>
						<small>Help Center</small>
					</div>
					<div className="space-x-2.5">
						<Link
							className="link link-hover underline-offset-2 text-sm"
							href="/info">
							Back to myblog.info
						</Link>
						{/* TODO: Add the link to the new request in the help center */}
						<Link
							href="#"
							className="btn btn-outline border-gray-300 rounded-full text-sm">
							Submit a request
						</Link>
					</div>
				</nav>
			</header>
			<main className="flex-wrap">Hello World</main>
			<footer></footer>
		</div>
	);
};

export default HelpPage;
