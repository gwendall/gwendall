export enum MentionType {
    Press = "press",
    Video = "video",
    Podcast = "podcast",
    Talk = "talk",
    Award = "award",
}

export const MentionTypeLabels: Record<MentionType, string> = {
    [MentionType.Press]: "Press",
    [MentionType.Video]: "Video",
    [MentionType.Podcast]: "Podcast",
    [MentionType.Talk]: "Talk",
    [MentionType.Award]: "Award",
};

export type Mention = {
    title: string;
    url: string;
    source: string;
    date: Date;
    type: MentionType;
    project?: string;
    hidden?: boolean;
};

export type Testimonial = {
    author: string;
    role: string;
    company?: string;
    quote: string;
    project?: string;
    link?: string;
};

export const TESTIMONIALS: Testimonial[] = [
    {
        author: 'Alexis Ohanian',
        role: 'Founder',
        company: 'Reddit',
        quote: 'Whoa. Hackerface is rapportive for Hackernews - and I like it! Nice job, Gwendall.',
        project: 'Falcon',
        link: 'https://x.com/alexisohanian/status/251316911789449216'
    },
    {
        author: 'Anne Hidalgo',
        role: 'Mayor',
        company: 'City of Paris',
        quote: 'Bravo à Gwendall, concepteur de la carte des start-ups à Paris.',
        project: 'TechList',
        link: 'https://x.com/Anne_Hidalgo/status/289054324225617921'
    },
    {
        author: 'Pierre Valade',
        role: 'CEO',
        company: 'Sunrise',
        quote: 'Gwendall, bravo ! Wevoxe est magnifique !',
        project: 'Wevoxe',
        link: 'https://x.com/pierrevalade/status/186800394222051328'
    }
];

const MENTIONS: Mention[] = [
    {
        title: 'Falcon.io: wat een geweldige tool!',
        source: 'Recruitment Matters',
        url: 'https://recruitmentmatters.nl/2013/01/19/falcon-io-wat-een-geweldige-tool/',
        date: new Date('2013-01-19'),
        type: MentionType.Press,
        project: 'Falcon'
    },
    {
        title: 'Interview - The Meteor Podcast',
        source: 'The Meteor Podcast',
        url: 'https://www.listennotes.com/podcasts/full-stack/001-gwendall-esnault-meteorjs-goVvO2c5mJ3/#episode',
        date: new Date('2017-08-28'),
        type: MentionType.Podcast,
        project: 'Meteor packages'
    },
    {
        title: 'Metahood raises $3M to build the Zillow of the Metaverse',
        source: 'Decrypt',
        url: 'https://decrypt.co/119429/metahood-raises-3m-build-zillow-metaverse',
        date: new Date('2023-01-18'),
        type: MentionType.Press,
        project: 'Metahood'
    },
    {
        title: 'Falcon demo',
        source: 'The Jim Stroud Show',
        url: 'https://www.youtube.com/watch?v=5VV3Ej_WTZc&t=1m25s',
        date: new Date('2013-03-27'),
        type: MentionType.Video,
        project: 'Falcon'
    },
    {
        title: 'Tech list : les start-up aussi ont leur Meetic',
        source: 'Terrafemina',
        url: 'http://www.terrafemina.com/emploi-a-carrieres/actu/articles/22855-tech-list-les-start-up-aussi-ont-leur-meetic.html',
        date: new Date('2013-02-20'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: "Oh French Startup Crowd, You're Growing Up!",
        source: 'Techbaguette',
        url: 'https://techbaguette.com/2013/02/12/growing-up/',
        date: new Date('2013-02-12'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Où sont les start-up à Paris ? La carte-réseau !',
        source: 'E-Vous',
        url: 'http://www.evous.fr/Ou-sont-les-start-up-a-Paris-La-carte-reseau,1180881.html',
        date: new Date('2013-02-07'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Une cartographie des start-ups parisiennes',
        source: 'Presse Citron',
        url: 'http://presse-citron.net/une-cartographie-des-start-ups-parisiennes',
        date: new Date('2013-01-30'), // Adjusted to match ~end Jan based on context
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Do not miss the tool',
        source: 'Boolean Strings',
        url: 'https://booleanstrings.com/2013/01/28/do-not-miss-the-tool/',
        date: new Date('2013-01-29'),
        type: MentionType.Press,
        project: 'Falcon'
    },
    {
        title: 'Paris : une start-up à chaque coin de rue',
        source: 'Usine Nouvelle',
        url: 'http://www.usinenouvelle.com/article/paris-une-start-up-a-chaque-coin-de-rue.N189726',
        date: new Date('2013-01-17'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Les 3 derniers sites à découvrir',
        source: 'FrenchWeb',
        url: 'http://frenchweb.fr/les-3-derniers-sites-a-decouvrir-22',
        date: new Date('2013-01-17'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Bon plan : une carte interactive pour repérer les start-up qui recrutent',
        source: 'Cadre Emploi',
        url: 'http://www.cadremploi.fr/editorial/actualites/actu-emploi/detail/article/bon-plan-une-carte-interactive-pour-reperer-les-start-up-qui-recrutent.html',
        date: new Date('2013-01-14'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Une carte de Paris pour repérer les start-up',
        source: 'La Tribune',
        url: 'http://www.latribune.fr/blogs/tendances-web/20121203trib000734854/une-carte-de-paris-pour-reperer-les-start-up.html',
        date: new Date('2013-01-09'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Paris Tech List, des start-up à la carte',
        source: 'Newzilla',
        url: 'http://www.newzilla.net/2013/01/09/paris-tech-list-le-paris-des-start-up-a-la-carte/',
        date: new Date('2013-01-09'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'ParisTechList, une cartographie des acteurs du numérique parisien',
        source: 'Le Petit Web',
        url: 'http://www.petitweb.fr/campagnes/paristechlist/',
        date: new Date('2013-01-07'),
        type: MentionType.Press,
        project: 'TechList'
    },
    {
        title: 'Hackerface presentation',
        source: 'General Assembly',
        url: 'https://www.youtube.com/watch?v=k8_UmFDa8H8&t=2m18s',
        date: new Date('2012-10-16'),
        type: MentionType.Video,
        project: 'Falcon'
    }
];

export default MENTIONS;

