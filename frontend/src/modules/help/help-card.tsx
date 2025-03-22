import {
    HelpCardProps,
    partnerHelpCardData,
    termsHelpCardData,
    userHelpCardData,
} from "@/constants/help_card";
import Link from "next/link";

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

const HelpCard = ({ Icon, title, description, items, href }: HelpCardProps) => {
    return (
        <div className="card border border-gray-200 p-2 shadow-md">
            <div className="flex gap-2 md:gap-4">
                <div>
                    <Icon className="size-8 md:size-12" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h1 className="card-title">{title}</h1>
                        <p className="text-xs text-gray-500 md:text-sm">
                            {description}
                        </p>
                    </div>
                    <ul className="list-disc space-y-2 text-xs md:text-sm">
                        {items.map((ele) => (
                            <li className="text-gray-500" key={ele}>
                                {ele}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Link
                            href={href}
                            className="btn btn-outline btn-xs md:btn-sm"
                        >
                            See all
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
