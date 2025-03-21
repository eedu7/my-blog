import Image from "next/image";
import Link from "next/link";
import React from "react";

export const InfoNavbar = () => {
	return (
		<>
			<nav className="flex items-center justify-between mx-auto max-w-7xl pt-8 pb-2">
				<Link href="/info">
					<Image
						src="/icons/my-blog-logo.svg"
						alt="My Blog's Logo"
						width={48}
						height={48}
					/>
				</Link>
				<ul className="flex items-center gap-4 text-sm">
					<li>
						<a
							href="/about"
							className="btn-link link-hover cursor-pointer underline-offset-4">
							Our story
						</a>
					</li>
					{/* TODO: Open the SignIn modal, when clicked on any of this */}
					<li>
						<button className="btn-link link-hover cursor-pointer underline-offset-4">
							Membership
						</button>
					</li>
					<li>
						<button className="btn-link link-hover cursor-pointer underline-offset-4">
							Write
						</button>
					</li>
					<li>
						<button className="btn-link link-hover cursor-pointer underline-offset-4">
							Sign in
						</button>
					</li>
					<li>
						<button className="btn btn-outline btn-sm">Get started</button>
					</li>
				</ul>
			</nav>
		</>
	);
};
