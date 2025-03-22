import {
    BookOpenIcon,
    BookOpenTextIcon,
    CheckSquare,
    CompassIcon,
    ComputerIcon,
    LucideScanEye,
    PenBoxIcon,
    PodcastIcon,
    UserCircle2Icon,
} from "lucide-react";

export interface HelpCardProps {
    Icon: React.ElementType;
    title: string;
    description: string;
    items: string[];
    href: string;
}

// TODO: The items here, change them into object,
// and attach a link to their corresponding page or blog post

export const userHelpCardData: HelpCardProps[] = [
    {
        Icon: CompassIcon,
        title: "Getting started",
        description: "Learn more about MyBlog and set up your account",
        items: [
            "Sign in or sign up to MyBlog",
            "Using MyBlog",
            "MyBlog membership",
            "MyBlog glossary",
        ],
        href: "#",
    },
    {
        Icon: UserCircle2Icon,
        title: "Managing your account",
        description:
            "Everything you need to know about your account settings and profile page",
        items: [
            "Your profile page",
            "Your profile page URL",
            "Adjust email preferences",
            "Connect social media accounts",
        ],
        href: "#",
    },
    {
        Icon: BookOpenIcon,
        title: "Reading",
        description: "Control your reading experience on Medium",
        items: [
            "Your homepage",
            "Create and manage lists",
            "Control your recommendations",
            "Mute an author or publications",
            "About Audio",
        ],
        href: "#",
    },
    {
        Icon: ComputerIcon,
        title: "Managing stories",
        description: "Manage your content",
        items: [
            "Your stats",
            "Your audience stats",
            "About Friends Links",
            "Your publications",
            "Email subscriptions",
        ],
        href: "#",
    },
    {
        Icon: PenBoxIcon,
        title: "Writing & editing",
        description: "Master the story editor",
        items: [
            "Writing and publishing your final story",
            "Create, edit, or delete a story",
            "Using images",
            "Using embeds",
            "Using tags",
            "Sharing drafts and getting feedback",
        ],
        href: "#",
    },
    {
        Icon: LucideScanEye,
        title: "Distribution",
        description: "Learn more about distribution on MyBlog",
        items: [
            "What happens to your post when you publish on MyBlog",
            "MyBlog's quality standards; how we review stories for distributions",
        ],
        href: "#",
    },
];

export const partnerHelpCardData: HelpCardProps[] = [
    {
        Icon: CheckSquare,
        title: "Partner Program",
        description: "Start earning for your content",
        items: [
            "Partner Program Guide",
            "Make a post eligible to earn money",
            "Your Partner Program dashboard",
            "Calculating earnings in the Partner Program",
        ],
        href: "#",
    },
    {
        Icon: PodcastIcon,
        title: "Publications",
        description: "Learn how to set up and manage a MyBlog publications",
        items: [
            "Getting started with a MyBlog publications",
            "Edit publications settings",
            "Add a draft or post to publications",
            "Publications stats",
            "Publications header",
            "Publications sections",
            "Homepage navigations",
            "How to use Newsletters",
        ],
        href: "#",
    },
];
export const termsHelpCardData: HelpCardProps[] = [
    {
        Icon: BookOpenTextIcon,
        title: "Terms & Policies",
        description: "The fine print",
        items: [
            "Terms of Service",
            "MyBlog Rules",
            "Privacy Policy",
            "Partner Program Terms",
        ],
        href: "#",
    },
    {
        Icon: BookOpenTextIcon,
        title: "Content",
        description: "Content policies",
        items: [
            "COVID-19 Content Policy",
            "Controversial, Suspect, and Extreme Content",
            "Best practices for journalism on MyBlog",
        ],
        href: "#",
    },
    {
        Icon: BookOpenTextIcon,
        title: "Safety",
        description: "Learn about MyBlog's safety tools",
        items: [
            "Block a user",
            "Manage responses",
            "Report posts & users",
            "Report copyright infringement",
            "User data protections",
        ],
        href: "#",
    },
];
