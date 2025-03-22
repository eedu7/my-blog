interface NavLinks {
    id: string;
    href: string;
    title: string;
}

export const ABOUT_LINK: NavLinks = { id: "01", href: "/about", title: "About" };
export const INFO_LINK: NavLinks = { id: "12", href: "/info", title: "MyBlog" };
export const HELP_LINK: NavLinks = { id: "02", href: "/help", title: "Help" };
export const STATUS_LINK: NavLinks = { id: "03", href: "/status", title: "Status" };
export const TEAMS_LINK: NavLinks = { id: "10", href: "/teams", title: "Teams" };

// TODO: Add the corresponding links to these
export const TEXT_TO_SPEECH_LINK: NavLinks = { id: "09", href: "#", title: "Text to speech" };
export const PRIVACY_LINK: NavLinks = { id: "04", href: "#", title: "Privacy" };
export const TERMS_LINK: NavLinks = { id: "05", href: "#", title: "Terms" };
export const BLOG_LINK: NavLinks = { id: "06", href: "#", title: "Blog" };
export const CAREERS_LINK: NavLinks = { id: "07", href: "#", title: "Careers" };
export const PRESS_LINK: NavLinks = { id: "08", href: "#", title: "Press" };
export const WRITER_LINK: NavLinks = { id: "11", href: "#", title: "writers" };

export const InfoPageFooterMobileLinks: NavLinks[] = [
    ABOUT_LINK,
    HELP_LINK,
    TERMS_LINK,
    PRIVACY_LINK,
];

export const InfoPageFooterLinks: NavLinks[] = [
    HELP_LINK,
    STATUS_LINK,
    ABOUT_LINK,
    CAREERS_LINK,
    PRESS_LINK,
    BLOG_LINK,
    PRIVACY_LINK,
    TERMS_LINK,
    TEXT_TO_SPEECH_LINK,
    TEAMS_LINK,
];

export const helpPageFooterLinks: NavLinks[] = [
    STATUS_LINK,
    WRITER_LINK,
    BLOG_LINK,
    CAREERS_LINK,
    PRIVACY_LINK,
    TERMS_LINK,
    ABOUT_LINK,
];
