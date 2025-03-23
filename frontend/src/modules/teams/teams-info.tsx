import { TeamInfoCard, teamsInfoCardData } from "@/constants/data/teamsPage";
import Image from "next/image";

export const TeamsInfoSection = () => {
    return (
        <section className="mx-auto flex max-w-7xl flex-col items-center space-y-4 bg-linear-to-bl from-rose-100 to-teal-100 py-8 md:my-8 md:space-y-8 lg:my-16 lg:h-[36rem]">
            <div>
                <h1 className="p-4 text-2xl md:w-[32rem] md:p-0 md:text-4xl">
                    Give your team the knowledge they need to grow and thrive
                </h1>
            </div>
            <div className="grid w-10/12 grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {teamsInfoCardData.map(({ imageSrc, title, description }) => (
                    <TeamsInfoSectionCard
                        key={title}
                        imageSrc={imageSrc}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </section>
    );
};

interface TeamInfoCardProps extends TeamInfoCard {}

const TeamsInfoSectionCard = ({ imageSrc, title, description }: TeamInfoCardProps) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image src={imageSrc} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
