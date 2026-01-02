import React from "react";

export type Project = {
    name: string;
    url: string;
    logo?: string;
    description: string | React.ReactNode;
    isDiscontinued?: boolean;
    isUpcoming?: boolean;
    tweets?: string[];
    launchDate?: Date;
};

const PROJECTS: Project[] = [
    {
        name: 'kami.bot',
        url: 'https://kami.bot',
        description: 'Embodied agent experiments.',
        launchDate: new Date('2026-01-01')
    },
    {
        name: 'VibeWorld',
        url: 'https://vibeworld.co',
        description: 'Persistent multiplayer web-based world engine.',
        launchDate: new Date('2025-03-01'),
        tweets: [
            "https://x.com/gwendall/status/1905662132915490850"
        ]
    },
    // {
    //     name: 'EXO.FM',
    //     url: 'https://exo.fm',
    //     description: 'Social AI agentic framework.',
    //     isUpcoming: true,
    //     launchDate: new Date('2025-08-01')
    // },
    {
        name: 'meeb.cam',
        url: 'https://meeb.cam',
        description: 'Digital avatar studio.',
        launchDate: new Date('2025-02-01')
    },
    {
        name: 'SuperClaude',
        url: 'https://github.com/gwendall/superclaude',
        description: 'AI commit message generator.',
        launchDate: new Date('2025-06-01')
    },
    {
        name: 'ParisTechList',
        url: 'https://www.latribune.fr/blogs/tendances-web/20121203trib000734854/une-carte-de-paris-pour-reperer-les-start-up.html',
        description: (
            <div>
                Interactive map of Paris tech ecosystem. Gave birth to the <a href="https://lafrenchtech.gouv.fr/" target="_blank" rel="noreferrer" className="text-link hover:underline"> French Tech label</a> movement.
            </div>
        ),
        launchDate: new Date('2012-12-01')
    },
    {
        name: 'way.js',
        url: 'https://github.com/gwendall/way.js',
        description: 'Two-way data binding JavaScript library.',
        launchDate: new Date('2014-05-15')
    },
    {
        name: 'PUNK.CAM Virtual Camera',
        url: 'https://punk.cam/extension',
        logo: 'https://pbs.twimg.com/profile_images/1833456434182324224/UnK1Zn71_400x400.jpg',
        description: 'Wearable digital avatars for video calls.',
        tweets: [
            "https://x.com/gwendall/status/1877018396845383991",
        ],
        launchDate: new Date('2025-01-08')
    },
    {
        name: 'TurnMe.AI',
        url: 'https://turnme.ai',
        logo: 'https://turnme.ai/logo.png',
        description: 'Social AI image generator.',
        tweets: [
            "https://x.com/gwendall/status/1854202017876685071"
        ],
        launchDate: new Date('2024-11-06')
    },
    {
        name: 'PUNK.CAM',
        url: 'https://punk.cam',
        logo: 'https://punk.cam/logo.png',
        description: 'CryptoPunk identity camera.',
        tweets: [
            "https://x.com/gwendall/status/1707853803536716041",
            // "https://x.com/gwendall/status/1464003154702385153"
        ],
        launchDate: new Date('2023-09-29')
    },
    {
        name: 'PunkMaker',
        url: 'https://punkmaker.xyz',
        logo: 'https://punkmaker.xyz/logo.png',
        description: 'CryptoPunk avatar generator.',
        tweets: [
            "https://x.com/gwendall/status/1714972677570445540"
        ],
        launchDate: new Date('2023-10-19')
    },
    {
        name: 'Metahood',
        url: 'https://metahood.xyz',
        logo: 'https://pbs.twimg.com/profile_images/1613845233136959488/Sl4TG6ZV_400x400.jpg',
        description: 'Virtual real estate marketplace.',
        tweets: [
            "https://x.com/gwendall/status/1615746051608137729"
        ],
        launchDate: new Date('2023-01-18')
    },
    {
        name: 'HIC.AF',
        url: 'https://hic.af',
        logo: 'https://pbs.twimg.com/profile_images/1448661463321628693/-vgZf5_A_400x400.png',
        description: 'Digital art marketplace.',
        // isDiscontinued: true,
        tweets: [
            "https://x.com/gwendall/status/1429068178454372362"
        ],
        launchDate: new Date('2021-08-21')
    },
    // {
    //     name: 'Side Events',
    //     url: 'https://side.events',
    //     logo: 'https://pbs.twimg.com/profile_images/1628369893434220546/txjF12jM_400x400.jpg',
    //     description: 'Crypto event discovery platform.',
    //     // isDiscontinued: true,
    //     tweets: [
    //         "https://x.com/gwendall/status/1538550321294856199"
    //     ],
    //     launchDate: new Date('2022-06-19')
    // },
    {
        name: 'Flinks',
        url: 'https://flinks.gg',
        logo: 'https://flinks.gg/logo.png',
        description: 'Farcaster frames integration for Twitter.',
        // isDiscontinued: true,
        tweets: [
            "https://x.com/gwendall/status/1806329360791560300"
        ],
        launchDate: new Date('2024-06-27')
    },
    {
        name: 'AnyChat',
        url: 'https://anychat.lol',
        logo: 'https://pbs.twimg.com/profile_images/1636253215833444354/9pNQcuk6_400x400.jpg',
        description: 'Personality-driven AI chatbot platform.',
        tweets: [
            "https://x.com/gwendall/status/1635701987021934593"
        ],
        // isDiscontinued: true,
        launchDate: new Date('2023-03-14')
    },
    {
        name: 'Hotline',
        url: 'https://hotline.fm',
        logo: 'https://hotline.fm/logo.png',
        description: 'AI celebrity conversation platform.',
        tweets: [],
        launchDate: new Date('2023-08-07')
    },
    {
        name: 'Banger.fm',
        url: 'https://banger.fm',
        logo: 'https://banger.fm/logo.png',
        description: 'AI music generation engine.',
        // isDiscontinued: true,
        tweets: [
            "https://x.com/gwendall/status/1661742156976099329"
        ],
        launchDate: new Date('2023-05-25')
    },
];

export default PROJECTS;