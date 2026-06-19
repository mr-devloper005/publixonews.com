import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media Distribution, press releases, and public updates',
      description: 'Distribute announcements, media coverage, public notices, and brand updates through a focused newsroom experience.',
      openGraphTitle: 'Media Distribution and newsroom updates',
      openGraphDescription: 'Discover press releases, coverage notes, announcements, and public media updates in one focused archive.',
      keywords: ['media distribution', 'press releases', 'newsroom', 'brand updates'],
    },
    hero: {
      badge: 'Media distribution desk',
      title: ['Distribute your story with', 'clarity, reach, and credibility.'],
      description: 'A focused newsroom for press releases, announcements, campaign updates, brand coverage, and public information that needs to be found fast.',
      primaryCta: { label: 'Browse Media Updates', href: '/media-distribution' },
      secondaryCta: { label: 'Start Distribution', href: '/contact' },
      searchPlaceholder: 'Search releases, brands, campaigns, and topics',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest distributed updates keep the homepage current.',
      featureCardDescription: 'Real posts from the active feed drive the experience without replacing backend content with mock entries.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for distributing media updates without burying the message.',
      paragraphs: [
        'This site brings press releases, brand announcements, media notes, and public updates into one organized distribution surface.',
        'Each page is shaped for fast scanning first, then deeper reading, so visitors can move from headline to context without friction.',
        'The layout keeps real posts, categories, search, and detail pages connected while preserving the publishing flow behind the scenes.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-led homepage cards that highlight headlines and summaries.',
        'Real media-distribution posts surfaced in archive and search.',
        'Focused detail pages for releases, announcements, and coverage notes.',
        'Lightweight animation that keeps the experience polished and readable.',
      ],
      primaryLink: { label: 'Browse releases', href: '/media-distribution' },
      secondaryLink: { label: 'Contact desk', href: '/contact' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Move from announcement to audience with a cleaner distribution hub.',
      description: 'Publish, organize, search, and share media updates through one consistent public-facing experience.',
      primaryCta: { label: 'Browse Releases', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the distribution desk',
    title: 'A clearer way to publish and discover media updates.',
    description: `${slot4BrandConfig.siteName} helps announcements, releases, coverage notes, and public updates feel organized, credible, and easy to explore.`,
    paragraphs: [
      'Media distribution works best when the message is direct and the archive is easy to trust. This site gives each update enough structure to be scanned quickly and enough space to carry the full context.',
      'The experience is designed around real posts, clear categories, focused search, and detail pages that keep calls to action visible without overwhelming the reader.',
    ],
    values: [
      {
        title: 'Distribution-ready structure',
        description: 'Releases, announcements, and coverage updates are shaped with clear headlines, summaries, categories, and direct actions.',
      },
      {
        title: 'Real archive discovery',
        description: 'Archive and search pages surface published content from the feed so visitors can find active media updates quickly.',
      },
      {
        title: 'Trustworthy presentation',
        description: 'A restrained layout, readable cards, and consistent navigation help each update feel credible and easy to act on.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Request distribution support for your next media update.',
    description: 'Share what you need to announce, where it should be positioned, and what audience it should reach. The desk can help route releases, corrections, public notices, and campaign updates.',
    formTitle: 'Request a Call Back',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media distribution posts, releases, topics, and categories across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, announcements, and media updates faster.',
      description: 'Use keywords, categories, and content types to discover published media distribution posts across the site.',
      placeholder: 'Search by release title, company, topic, or category',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media distribution content.',
      description: 'Use your account to open the publishing workspace and prepare releases, public updates, coverage notes, and campaign announcements.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a media-ready update for the distribution desk.',
      description: 'Choose the content type, add details, and prepare a clean post with links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for the media distribution workspace.',
      badge: 'Publisher access',
      title: 'Welcome back to the distribution desk.',
      description: 'Login to prepare releases, manage submissions, and continue publishing media updates from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for the media distribution workspace.',
      badge: 'Distribution access',
      title: 'Create your account and start distributing updates.',
      description: 'Create an account to access the publishing workspace, save details, and submit media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
