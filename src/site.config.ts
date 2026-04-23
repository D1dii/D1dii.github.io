import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://github.com/D1dii',
    title: 'Dídac García',
    description: 'My Portfolio',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'My Projects',
            href: '/My Projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://dribbble.com/'
        },
    ],
    hero: {
        title: 'Dídac García',
        text: "I am a young game developer with a strong desire to learn and create unique projects.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'A person sitting at a desk in front of a computer'
        },
    },
    about: {
        title: 'About',
        text: 'Videogame developer, current student of Video Game Design and Development at UPC CITM University in Barcelona. Due to the different projects I have worked on I have become highly adaptable to different environments and capable of performing in a wide range of areas, with a strong focus on computer science. Passionate about acquiring new skills and applying them to contribute to the team’s success.',
    },
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:example@example.com",
            email: "example@example.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/"
            },
            {
                text: "Peerlist",
                href: "https://www.peerlist.io/"
            },
            {
                text: "GitHub",
                href: "https://github.com/"
            }
        ]
    },
    My Projects: {
        description: "These are my personal projects I have worked on"
    },
    postsPerPage: 2,
    recentPostLimit: 3
};

export default siteConfig;
