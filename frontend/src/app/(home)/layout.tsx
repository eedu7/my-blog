import React from "react";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return <main>{children}</main>;
};

export default HomeLayout;
