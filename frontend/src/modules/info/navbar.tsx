import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBarLinks = () => {
	return (
		<>
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
				<a
					href="/sign-in"
					className="btn-link link-hover cursor-pointer underline-offset-4">
					Sign in
				</a>
			</li>
			<li>
				<button className="btn btn-outline btn-sm">Get started</button>
			</li>
		</>
	);
};

export const InfoNavbar = () => {
	return (
		<nav className="flex items-center navbar justify-between mx-auto max-w-7xl">
			<Link href="/info">
				<Image
					src="/icons/my-blog-logo.svg"
					alt="My Blog's Logo"
					width={48}
					height={48}
				/>
			</Link>
			<div className="md:hidden flex-none">
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
							className="drawer-button btn btn-square btn-ghos">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block h-5 w-5 stroke-current">
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>{" "}
							</svg>
						</label>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"></label>
						<ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
							{/* Sidebar content here */}
							<ul className="space-y-4">
								<NavBarLinks />
							</ul>
						</ul>
					</div>
				</div>
			</div>

			<ul className="hidden md:flex items-center gap-4 text-sm">
				<NavBarLinks />
			</ul>
		</nav>
	);
};
