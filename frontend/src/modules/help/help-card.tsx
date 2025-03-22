import {
    partnerHelpCardData,
    termsHelpCardData,
    userHelpCardData,
} from "@/constants/help_card";
import { CompassIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const HelpCardSection = () => {
    return (
        <section className="mx-auto max-w-7xl space-y-2.5">
            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
                {userHelpCardData.map(
                    ({ Icon, title, description, items, href }) => (
                        <HelpCard
                            key={title}
                            Icon={Icon}
                            title={title}
                            description={description}
                            items={items}
                            href={href}
                        />
                    ),
                )}
            </div>
            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
                {partnerHelpCardData.map(
                    ({ Icon, title, description, items, href }) => (
                        <HelpCard
                            key={title}
                            Icon={Icon}
                            title={title}
                            description={description}
                            items={items}
                            href={href}
                        />
                    ),
                )}
            </div>
            <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
                {termsHelpCardData.map(
                    ({ Icon, title, description, items, href }) => (
                        <HelpCard
                            key={title}
                            Icon={Icon}
                            title={title}
                            description={description}
                            items={items}
                            href={href}
                        />
                    ),
                )}
            </div>
        </section>
    );
};

// TODO: Fix the interface for the Icon and items
export interface HelpCardProps {
    Icon: Type;
    title: string;
    description: string;
    items: any;
    href: string;
}

const HelpCard = ({ Icon, title, description, items, href }: HelpCardProps) => {
    return (
        <div className="card border border-gray-200 p-2 shadow-md">
            <div className="flex gap-4">
                <div>
                    <Icon className="size-12" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h1 className="card-title">{title}</h1>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                    <ul className="list-disc space-y-2 text-sm">
                        {items.map((ele) => (
                            <li className="text-gray-500" key={ele}>
                                {ele}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Link href={href} className="btn btn-outline btn-sm">
                            See all
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
