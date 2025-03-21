"use client";

import Link from "next/link";

import { InfoPageFooterLinks, InfoPageFooterMobileLinks } from "@/constants/navbars";

export const InfoPageFooter = () => {
	// const { height } = useScreenSize();

	// if (height >= 768) {
	// 	return (
	// 		<ul className="hidden md:flex justify-center items-center gap-4 text-sm">
	// 			{InfoPageFooterLinks.map(({ id, href, title }) => (
	// 				<li
	// 					key={id}
	// 					className="link-hover underline-offset-2 link">
	// 					<Link href={href}>{title}</Link>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// } else {
	// 	return (
	// 		<ul className="flex md:hidden justify-start items-center gap-4 text-sm pb-4 px-4">
	// 			{InfoPageFooterMobileLinks.map(({ id, href, title }) => (
	// 				<li
	// 					key={id}
	// 					className="link-hover underline-offset-2 link">
	// 					<Link href={href}>{title}</Link>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	return (
		<>
			<ul className="hidden md:flex justify-center items-center gap-4 text-sm">
				{InfoPageFooterLinks.map(({ id, href, title }) => (
					<li
						key={id}
						className="link-hover underline-offset-2 link">
						<Link href={href}>{title}</Link>
					</li>
				))}
			</ul>
			<ul className="flex md:hidden justify-start items-center gap-4 text-sm pb-4 px-4">
				{InfoPageFooterMobileLinks.map(({ id, href, title }) => (
					<li
						key={id}
						className="link-hover underline-offset-2 link">
						<Link href={href}>{title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};
