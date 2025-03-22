import { AboutPageHeader } from "@/modules/about/header";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "About MyBlog",
};

const AboutPage = () => {
    return (
        <>
            <AboutPageHeader />
            <main></main>
            <footer></footer>
        </>
    );
};

export default AboutPage;
