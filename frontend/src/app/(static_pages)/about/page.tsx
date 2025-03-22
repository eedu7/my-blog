import { AboutPageFooterLinks, AboutPageMainBodyLinks, INFO_LINK } from "@/constants/navbars";
import { AboutPageHeader } from "@/modules/about/header";
import { ArrowBigRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About MyBlog",
};

const AboutPage = () => {
    const [MemberShipLink, HomeLink, WriteLink] = AboutPageMainBodyLinks;

    return (
        <>
            <AboutPageHeader />
            <main>
                <article className="my-8 space-y-8 p-4 lg:w-6/12 xl:w-5/12">
                    <h1 className="text-4xl md:text-7xl">Everyone has a story to tell</h1>
                    <p className="text-gray-600 md:text-lg">
                        MyBlog is a home for human stories and ideas. Here, anyone can share
                        knowledge and wisdom with the world—without having to build a mailing list
                        or a following first. The internet is noisy and chaotic; MyBlog is quiet yet
                        full of insight. It&apos;s simple, beautiful, collaborative, and helps you
                        find the right readers for whatever you have to say.
                    </p>
                    <p className="md:text-lg">
                        <mark>
                            Ultimately, our goal is to deepen our collective understanding of the
                            world through the power of writing.
                        </mark>
                    </p>
                    <p className="text-gray-600 md:text-lg">
                        We believe that what you read and write matters. Words can divide or empower
                        us, inspire or discourage us. In a world where the most sensational and
                        surface-level stories often win, we&apos;re building a system that rewards
                        depth, nuance, and time well spent. A space for thoughtful conversation more
                        than drive-by takes, and substance over packaging.
                    </p>
                    <p className="text-gray-600 md:text-lg">
                        Over 100 million people connect and share their wisdom on MyBlog every
                        month. They&apos;re software developers, amateur novelists, product
                        designers, CEOs, and anyone burning with a story they need to get out into
                        the world. They write about what they&apos;re working on, what&apos;s
                        keeping them up at night, what they&apos;ve lived through, and what
                        they&apos;ve learned that the rest of us might want to know too.
                    </p>
                    <p className="text-gray-600 md:text-lg">
                        Instead of selling ads or selling your data, we&apos;re supported by a
                        growing community of over a million a{" "}
                        <Link className="link underline-offset-2" href={MemberShipLink.href}>
                            MyBlog members
                        </Link>{" "}
                        who believe in our mission. If you&apos;re new here,{" "}
                        <Link className="link underline-offset-2" href={HomeLink.href}>
                            start reading
                        </Link>
                        . Dive deeper into whatever matters to you. Find a post that helps you learn
                        something new, or reconsider something familiar—and then{" "}
                        <Link className="link underline-offset-2" href={WriteLink.href}>
                            write your story
                        </Link>
                        .
                    </p>
                </article>
                <section className="">
                    <Link
                        href={HomeLink.href}
                        className="flex w-full items-center justify-between border-t p-4 hover:bg-gray-800 hover:text-gray-300"
                    >
                        <p className="text-4xl">Start reading</p>
                        <ArrowBigRight className="size-12" />
                    </Link>
                    <Link
                        href={WriteLink.href}
                        className="flex w-full items-center justify-between border p-4 hover:bg-gray-800 hover:text-gray-300"
                    >
                        <p className="text-4xl">Start writing</p>
                        <ArrowBigRight className="size-12" />
                    </Link>
                    <Link
                        href={MemberShipLink.href}
                        className="flex w-full items-center justify-between border-b p-4 hover:bg-gray-800 hover:text-gray-300"
                    >
                        <p className="text-4xl">Become a member</p>
                        <ArrowBigRight className="size-12" />
                    </Link>
                </section>
            </main>
            <footer className="flex flex-col items-center justify-between space-y-2.5 bg-gray-800 p-4 text-gray-300 md:flex-row">
                <Link href={INFO_LINK.href}>
                    <h1 className="text-2xl font-semibold">MyBlog</h1>
                </Link>
                <ul className="flex items-center gap-2 text-sm">
                    {AboutPageFooterLinks.map(({ id, title, href }) => (
                        <li key={id}>
                            <Link className="link underline-offset-2" href={href}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
};

export default AboutPage;
