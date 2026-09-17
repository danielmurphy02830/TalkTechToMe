export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: 'Code2' | 'Video' | 'Sparkles' | 'Layers' | 'Cpu' | 'CheckCircle';
  highlights: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'youtube' | 'substack' | 'medium';
  description: string;
  url: string;
  date: string;
  readTimeOrDuration: string;
  tags: string[];
  featured?: boolean;
}

export const BRAND_INFO = {
  name: "TalkTechToMe",
  creator: "Dan Murphy",
  tagline: "Exploring the Frontier of AI Tools & Modern Technology",
  domain: "talktechtome.co.uk",
  contactEmail: "danielmurphy02830@gmail.com",
  description: "Welcome! I'm Dan Murphy, and here we explore the exciting world of AI tools and modern technology. From deep dives into text-to-video apps like Synthesia and AI coding assistants like Cursor, to practical demos and honest reviews – we break down how these tools work, their features, pricing, and real-world applications. Whether you're a creator, developer, marketer, or just tech-curious, subscribe for clear insights into the software shaping our future.",
  shortBio: "Tech explorer, AI practitioner, and creator dissecting text-to-video tools, AI coding assistants, and modern software innovations.",
  socials: {
    personal: "https://danmurphy.life",
    linkedin: "https://www.linkedin.com/in/daniel-murphy-254a2046/",
    medium: "https://medium.com/@danielmurphy02830",
    substack: "https://substack.com/@talktechtome",
    youtube: "https://www.youtube.com/@TalkTechToMe"
  }
};

export const TOPIC_PILLARS: Topic[] = [
  {
    id: "ai-coding",
    title: "AI Coding Assistants",
    subtitle: "Supercharging developer productivity",
    description: "Hands-on breakdowns of tools like Cursor, GitHub Copilot, Windsurf, and Claude Code. How agentic coding assistants transform real-world software workflows.",
    badge: "Developer Spotlight",
    iconName: "Code2",
    highlights: ["Cursor setup & prompt engineering", "Multi-file refactoring workflows", "AI pair programming benchmarks"]
  },
  {
    id: "text-to-video",
    title: "Text-to-Video & Generative Avatars",
    subtitle: "The synthetic video revolution",
    description: "Deep dive reviews of Synthesia, HeyGen, Runway, and emerging video models. Testing avatar fidelity, voice cloning, and enterprise video pipelines.",
    badge: "Creator Tech",
    iconName: "Video",
    highlights: ["Synthesia avatar creation & scripting", "Text-to-video benchmark comparisons", "ROI & production cost analysis"]
  },
  {
    id: "honest-reviews",
    title: "Honest Reviews & Pricing Breakdowns",
    subtitle: "Zero fluff, real value assessment",
    description: "Transparent evaluations of the newest AI software. We test features, hidden costs, subscription tiers, and whether they're truly worth your money.",
    badge: "Buyer's Guide",
    iconName: "Sparkles",
    highlights: ["Feature-by-feature teardowns", "Pricing tiers & hidden quotas", "Alternatives & open-source options"]
  },
  {
    id: "practical-demos",
    title: "Practical Demos & Workflows",
    subtitle: "From zero to production",
    description: "Step-by-step guides showing how creators, developers, and marketers apply AI tools to solve real business challenges without getting overwhelmed.",
    badge: "Actionable Insights",
    iconName: "Cpu",
    highlights: ["Real-time workflow walkthroughs", "Integration with existing stacks", "Best practice templates"]
  }
];

export const FEATURED_MEDIA: MediaItem[] = [
  {
    id: "media-1",
    title: "Deep Dive into Synthesia: Is AI Video Generation Ready for Primetime?",
    type: "youtube",
    description: "Comprehensive walkthrough of Synthesia's custom studio avatars, voice cloning fidelity, and how teams produce training videos at scale.",
    url: "https://www.youtube.com/@TalkTechToMe",
    date: "Featured Video",
    readTimeOrDuration: "18 mins",
    tags: ["Synthesia", "AI Video", "Demos"],
    featured: true
  },
  {
    id: "media-2",
    title: "Cursor vs. Traditional IDEs: How AI Coding Redefines Full-Stack Development",
    type: "substack",
    description: "An analytical breakdown on Substack exploring the architectural shift behind Cursor and agentic code editors.",
    url: "https://substack.com/@talktechtome",
    date: "Latest Newsletter",
    readTimeOrDuration: "6 min read",
    tags: ["Cursor", "Developer Tools", "AI Workflow"]
  },
  {
    id: "media-3",
    title: "The Real Cost of AI Tool Subscriptions: What Brands Actually Pay",
    type: "medium",
    description: "Published on Medium: Deciphering credit models, seat fees, and API surcharges across today's leading generative AI platforms.",
    url: "https://medium.com/@danielmurphy02830",
    date: "Medium Publication",
    readTimeOrDuration: "8 min read",
    tags: ["Software Pricing", "Tech Strategy", "Reviews"]
  },
  {
    id: "media-4",
    title: "Prompting AI Coding Models for Complex Full-Stack Architecture",
    type: "substack",
    description: "Techniques for steering LLMs through complex database migrations and full-stack integrations.",
    url: "https://substack.com/@talktechtome",
    date: "Newsletter Archive",
    readTimeOrDuration: "5 min read",
    tags: ["Engineering", "Prompting", "Substack"]
  }
];

export const COLLABORATION_TYPES = [
  { id: "review", label: "Tool or Software Review", desc: "Honest, comprehensive review and testing of your product" },
  { id: "sponsorship", label: "Channel or Newsletter Sponsorship", desc: "Feature your brand in front of an engaged tech audience" },
  { id: "demo", label: "Practical Demo / Walkthrough", desc: "In-depth tutorial showing how to use your platform" },
  { id: "speaking", label: "Consulting / Speaking / Podcast", desc: "Keynotes, panel discussions, or technical advisory" },
  { id: "other", label: "General Inquiry", desc: "Have an interesting tech idea or collaboration concept?" }
];
