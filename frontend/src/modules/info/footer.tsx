import Link from "next/link";
import React from "react";

import { InfoPageFooterLinks } from "@/constants/navbars";

export const InfoPageFooter = () => {
	return (
		<ul className="flex justify-center items-center gap-4 text-sm">
			{InfoPageFooterLinks.map(({ id, href, title }) => (
				<li
					key={id}
					className="link-hover underline-offset-2 link">
					<Link href={href}>{title}</Link>
				</li>
			))}
		</ul>
	);
};
