import { StaticImageData } from "next/image";
import { TeamsCultureJPG, TeamsCuriosityJPG, TeamsSkillsJPG } from "../images";

export interface TeamInfoCard {
    imageSrc: StaticImageData;
    title: string;
    description: string;
}

export const teamsInfoCardData: TeamInfoCard[] = [
    {
        imageSrc: TeamsSkillsJPG,
        title: "Unlock new skills",
        description:
            "Learning from others is a superpower. Give your teams direct access to the best insights on any topic, written by industry leaders and passionate professionals.",
    },
    {
        imageSrc: TeamsCultureJPG,
        title: "Catalyze Culture",
        description:
            "Tried-and-tested advice, practical frameworks, and new ideas will foster more effective communication, probliem-solving, and leadership capabilities within your organization.",
    },
    {
        imageSrc: TeamsCuriosityJPG,
        title: "Fuel curiosity",
        description:
            "Game-changing conversations happen at the water cooler. Stay on top of the trends and explore diverse viewpoints that encourage innovation and inspire new ideas.",
    },
];
