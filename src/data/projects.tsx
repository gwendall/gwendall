import React from "react";

export enum ProjectType {
    CurrentWork = "current-work",
    OngoingExperiments = "ongoing-experiments",
    PastWork = "past-work",
    Exhibition = "exhibition",
    Talk = "talk"
}

export const ProjectTypeLabels: Record<ProjectType, string> = {
    [ProjectType.CurrentWork]: "Current Work",
    [ProjectType.OngoingExperiments]: "Ongoing Experiments",
    [ProjectType.PastWork]: "Selected Past Work",
    [ProjectType.Exhibition]: "Exhibition",
    [ProjectType.Talk]: "Talk"
};

export type Project = {
    name: string;
    url: string;
    description: string | React.ReactNode;
    type: ProjectType;
    date: Date;
    logo?: string;
    tweets?: string[];
    isDiscontinued?: boolean; // Kept for potential future use or migration
    isUpcoming?: boolean; // Kept for potential future use or migration
    hidden?: boolean;
    archived?: boolean; // Hidden from home, but visible on /works
};

const ITEMS: Project[] = [
    // Current Work
    {
        name: 'kami.bot',
        url: 'https://kami.bot',
        description: 'Embodied agent experiments across digital and physical environments.',
        type: ProjectType.CurrentWork,
        date: new Date('2026-01-01')
    },
    {
        name: 'meeb.cam',
        url: 'https://meeb.cam',
        description: 'Digital avatar studio.',
        type: ProjectType.OngoingExperiments,
        date: new Date('2025-02-01'),
        tweets: [
            "https://x.com/gwendall/status/1891486845873148088"
        ]
    },

    // Ongoing Experiments
    {
        name: 'NakedPunks',
        url: 'https://nakedpunks.app',
        description: 'Full-body pixel avatars with generative appearance & behaviors - initially inspired by CryptoPunks.',
        tweets: [
            "https://x.com/punksOTC/status/1957417802278502572"
        ],
        type: ProjectType.OngoingExperiments,
        date: new Date('2025-08-15')
    },
    {
        name: 'PUNK.CAM',
        url: 'https://punk.cam',
        logo: 'https://punk.cam/logo.png',
        description: 'CryptoPunk identity camera.',
        tweets: [
            "https://x.com/gwendall/status/1707853803536716041",
        ],
        type: ProjectType.OngoingExperiments,
        date: new Date('2023-09-29')
    },

    // Past Work
    {
        name: 'PUNK.CAM Virtual Camera',
        url: 'https://punk.cam/extension',
        logo: 'https://pbs.twimg.com/profile_images/1833456434182324224/UnK1Zn71_400x400.jpg',
        description: 'Wearable digital avatars for video calls.',
        tweets: [
            "https://x.com/gwendall/status/1877018396845383991",
        ],
        type: ProjectType.PastWork,
        date: new Date('2025-01-08'),
        archived: true
    },
    {
        name: 'VibeWorld',
        url: 'https://vibeworld.co',
        description: 'Persistent multiplayer world engine (web-based).',
        tweets: [
            "https://x.com/gwendall/status/1905662132915490850"
        ],
        type: ProjectType.OngoingExperiments,
        date: new Date('2025-03-01')
    },
    {
        name: 'Nexus.JS',
        url: 'https://punk.cam/lab/nexus',
        description: 'Lightweight 2D/3D interaction system for browser-based editors and spatial interfaces.',
        tweets: [
            "https://x.com/gwendall/status/1934654618669068704"
        ],
        type: ProjectType.PastWork,
        date: new Date('2025-06-15')
    },
    {
        name: 'PunkMap',
        url: 'https://punkmap.com',
        description: 'Token-gated directory for CryptoPunks. Privacy-focused map showing members\' locations and occupations, accessible only to holders.',
        type: ProjectType.PastWork,
        date: new Date('2025-07-01'),
        archived: true,
    },
    {
        name: 'Fashion AI',
        url: 'https://fashion-ai-eight.vercel.app/',
        description: 'Photo-based outfit recognition and style analysis tool.',
        type: ProjectType.PastWork,
        date: new Date('2025-09-01'), // Approximate date
        archived: true
    },
    {
        name: 'PunkPool',
        url: 'https://punkpool.io',
        description: 'Protocol for group purchases of a CryptoPunk. Shared ownership and rights management.',
        type: ProjectType.PastWork,
        date: new Date('2025-09-01'),
        archived: true,
        hidden: true
    },
    {
        name: 'Super Looter',
        url: 'https://superlooter.vercel.app',
        description: 'Retro-gaming scanner. Extracts game info from photos to compare in-store prices with eBay Japan.',
        type: ProjectType.PastWork,
        date: new Date('2025-11-01'),
        archived: true
    },
    {
        name: 'DOS.Chat',
        url: 'https://dos.chat',
        description: 'Sentient retro OS with an 80s sci-fi AI personality.',
        type: ProjectType.PastWork,
        date: new Date('2025-04-01'),
        archived: true
    },
    {
        name: 'SuperClaude',
        url: 'https://github.com/gwendall/superclaude',
        description: 'AI commit message generator.',
        type: ProjectType.PastWork,
        date: new Date('2025-06-01'),
        archived: true
    },
    {
        name: 'FriendsDomains',
        url: 'https://x.com/friendsdomains',
        description: 'Social platform to share and upvote funny stories behind unused domain names.',
        type: ProjectType.PastWork,
        date: new Date('2012-05-01'),
        archived: true
    },
    {
        name: 'MeanBot',
        url: 'https://x.com/ameanbot',
        description: 'Experimental insulting chatbot. Pre-LLM experiment exploring negative interactions.',
        type: ProjectType.PastWork,
        date: new Date('2012-06-01'),
        archived: true
    },
    {
        name: 'TechList',
        url: 'https://www.latribune.fr/blogs/tendances-web/20121203trib000734854/une-carte-de-paris-pour-reperer-les-start-up.html',
        description: (
            <div>
                Interactive map of French tech ecosystem. Early catalyst for the “<a href="https://lafrenchtech.gouv.fr/" target="_blank" rel="noreferrer" className="text-link hover:underline">French Tech</a>” movement.
            </div>
        ),
        type: ProjectType.PastWork,
        date: new Date('2012-12-01')
    },
    {
        name: 'Falcon / Hackerface',
        url: 'https://recruitmentmatters.nl/2013/01/19/falcon-io-wat-een-geweldige-tool/',
        tweets: [
            "https://x.com/alexisohanian/status/251316911789449216"
        ],
        description: 'People search engine browser extension. Reconstructed a person\'s entire digital footprint from a single entry point (email, Twitter, etc). Acquired.',
        type: ProjectType.PastWork,
        date: new Date('2013-01-01'), // Approximate mid-year
        archived: true
    },
    {
        name: 'way.js',
        url: 'https://github.com/gwendall/way.js',
        description: 'Two-way data binding JavaScript library.',
        type: ProjectType.PastWork,
        date: new Date('2014-05-15')
    },
    {
        name: 'PUNKS.ART',
        url: 'https://punks.art',
        description: 'Experimental playground around CryptoPunks - apps, visual systems, and APIs.',
        type: ProjectType.PastWork,
        date: new Date('2024-05-01') // Approximate date based on activity
    },
    {
        name: 'TurnMe.AI',
        url: 'https://turnme.ai',
        logo: 'https://turnme.ai/logo.png',
        description: 'Social AI image generator.',
        tweets: [
            "https://x.com/gwendall/status/1854202017876685071"
        ],
        type: ProjectType.PastWork,
        date: new Date('2024-11-06')
    },
    {
        name: 'PunkMaker',
        url: 'https://punkmaker.xyz',
        logo: 'https://punkmaker.xyz/logo.png',
        description: 'CryptoPunk remix and avatar generator.',
        tweets: [
            "https://x.com/gwendall/status/1714972677570445540"
        ],
        type: ProjectType.PastWork,
        date: new Date('2023-10-19')
    },
    {
        name: 'Metahood',
        url: 'https://metahood.xyz',
        logo: 'https://pbs.twimg.com/profile_images/1613845233136959488/Sl4TG6ZV_400x400.jpg',
        description: 'Virtual real estate marketplace. VC-backed.',
        tweets: [
            "https://x.com/gwendall/status/1615746051608137729"
        ],
        type: ProjectType.PastWork,
        date: new Date('2023-01-18')
    },
    {
        name: 'HIC.AF',
        url: 'https://hic.af',
        logo: 'https://pbs.twimg.com/profile_images/1448661463321628693/-vgZf5_A_400x400.png',
        description: 'Digital art marketplace.',
        tweets: [
            "https://x.com/gwendall/status/1429068178454372362"
        ],
        type: ProjectType.PastWork,
        date: new Date('2021-08-21')
    },
    {
        name: 'Side Events',
        url: 'https://side.events',
        logo: 'https://pbs.twimg.com/profile_images/1628369893434220546/txjF12jM_400x400.jpg',
        description: 'Crypto event discovery platform.',
        tweets: [
            "https://x.com/gwendall/status/1538550321294856199"
        ],
        type: ProjectType.PastWork,
        date: new Date('2022-06-19'),
        archived: true,
    },
    {
        name: 'Flinks',
        url: 'https://flinks.gg',
        logo: 'https://flinks.gg/logo.png',
        description: 'Social sharing tool for decentralized networks.',
        tweets: [
            "https://x.com/gwendall/status/1806329360791560300"
        ],
        type: ProjectType.PastWork,
        date: new Date('2024-06-27'),
        archived: true,
    },
    {
        name: 'xr.fm',
        url: 'https://xr.fm',
        description: 'Open platform for publishing web-based XR experiences.',
        type: ProjectType.PastWork,
        date: new Date('2024-07-01'),
        archived: true
    },
    {
        name: 'AnyChat',
        url: 'https://anychat.lol',
        logo: 'https://pbs.twimg.com/profile_images/1636253215833444354/9pNQcuk6_400x400.jpg',
        description: 'Personality-driven AI chatbot platform.',
        tweets: [
            "https://x.com/gwendall/status/1635701987021934593"
        ],
        type: ProjectType.PastWork,
        date: new Date('2023-03-14')
    },
    {
        name: 'ANOTHER.CAM',
        url: 'https://another.cam',
        description: 'Style transfer camera app with presets (Ghibli, Simpson, etc).',
        type: ProjectType.PastWork,
        date: new Date('2025-03-01'),
        archived: true,
    },
    {
        name: 'Hotline',
        url: 'https://hotline.fm',
        logo: 'https://hotline.fm/logo.png',
        description: 'Character-driven AI chat platform.',
        type: ProjectType.PastWork,
        date: new Date('2023-08-07'),
        archived: true,
    },
    {
        name: 'Banger.fm',
        url: 'https://banger.fm',
        logo: 'https://banger.fm/logo.png',
        description: 'AI-generated music player and curated playlists.',
        tweets: [
            "https://x.com/gwendall/status/1661742156976099329"
        ],
        type: ProjectType.PastWork,
        date: new Date('2023-05-25'),
        archived: true,
    },

    // Talks & Exhibitions
    {
        name: 'The future of AI Agents, Spatial Computing and NPCs',
        url: 'https://www.youtube.com/watch?v=eqMUsjLFNtM',
        description: 'Talk at NFC Summit, Lisbon.',
        type: ProjectType.Talk,
        date: new Date('2024-06-01')
    },
    {
        name: 'Digital Identity systems and the evolution of avatars',
        url: 'https://www.youtube.com/watch?v=O8SH-yZNUDI',
        description: 'Talk at Metaverse Summit, Paris.',
        type: ProjectType.Talk,
        date: new Date('2023-10-01')
    },
    {
        name: 'The convergence of physical and digital worlds',
        url: 'https://www.youtube.com/watch?v=-0QMNDDCF9k',
        description: 'Talk at EthCC, Paris.',
        type: ProjectType.Talk,
        date: new Date('2022-07-01')
    },
    {
        name: '"London Calling" Exhibition',
        url: 'https://avant-galerie.com/london-calling',
        description: 'Digital art exhibition at Avant Galerie Vossen, Paris.',
        type: ProjectType.Exhibition,
        date: new Date('2024-01-13')
    }
];

export default ITEMS;
