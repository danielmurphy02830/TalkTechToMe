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

export interface HFModel {
  id: string;
  name: string;
  category: string;
  updated: string;
  downloadsOrViews: string;
  likes: string;
  icon: string;
  badge?: string;
  url: string;
}

export interface HFSpace {
  id: string;
  title: string;
  description: string;
  likes: number;
  gradient: string; // Tailwind gradient classes
  icon: string;
  url: string;
}

export interface HFDataset {
  id: string;
  name: string;
  updated: string;
  views: string;
  likes: string;
  url: string;
}

export const BRAND_INFO = {
  name: "TalkTechToMe",
  creator: "Dan Murphy",
  username: "danielmurphy",
  avatar: "/media/main-image.jpg",
  tagline: "The AI community building the future of tools & technology.",
  domain: "talktechtome.co.uk",
  contactEmail: "danielmurphy02830@gmail.com",
  description: "Welcome! I'm Dan Murphy, and here we explore the exciting world of AI tools and modern technology. From deep dives into text-to-video apps like Synthesia and AI coding assistants like Cursor, to practical demos and honest reviews – we break down how these tools work, their features, pricing, and real-world applications. Whether you're a creator, developer, marketer, or just tech-curious, subscribe for clear insights into the software shaping our future.",
  shortBio: "Principal AI Architect & Technical Leader dissecting text-to-video apps, AI coding assistants, and modern cloud innovations.",
  stats: {
    modelsReviewed: "50+",
    videoDemos: "25+",
    articlesPublished: "40+",
    yearsInTech: "20+"
  },
  socials: {
    personal: "https://danmurphy.life",
    linkedin: "https://www.linkedin.com/in/daniel-murphy-254a2046/",
    medium: "https://medium.com/@danielmurphy02830",
    substack: "https://substack.com/@talktechtome",
    youtube: "https://www.youtube.com/@TalkTechToMe"
  }
};

export const HF_EXPLORER_TASKS = [
  "Text Generation",
  "Text-to-Video",
  "AI Coding",
  "Image-to-Video",
  "Voice Cloning",
  "Any-to-Any",
  "Prompt Engineering",
  "LLM Reasoning"
];

export const HF_EXPLORER_MODELS: HFModel[] = [
  {
    id: "cursor-composer",
    name: "cursor / composer-agent-v3",
    category: "AI Code Editor • Multi-file refactor",
    updated: "Updated 2 days ago",
    downloadsOrViews: "48.2k",
    likes: "2.4k",
    icon: "⚡",
    badge: "Agentic IDE",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "synthesia-v4",
    name: "synthesia / studio-avatar-v4",
    category: "Text-to-Video • Voice Clone",
    updated: "Updated 4 days ago",
    downloadsOrViews: "112k",
    likes: "3.8k",
    icon: "🎬",
    badge: "Enterprise Video",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "claude-code-cli",
    name: "anthropic / claude-code-terminal",
    category: "Autonomous CLI Assistant",
    updated: "Updated yesterday",
    downloadsOrViews: "34.1k",
    likes: "1.9k",
    icon: "🤖",
    badge: "Developer Tool",
    url: "https://substack.com/@talktechtome"
  },
  {
    id: "windsurf-cascade",
    name: "codeium / windsurf-cascade-flow",
    category: "AI IDE • Deep Context Flow",
    updated: "Updated 5 days ago",
    downloadsOrViews: "29.5k",
    likes: "1.6k",
    icon: "🌊",
    badge: "Pair Programming",
    url: "https://medium.com/@danielmurphy02830"
  },
  {
    id: "heygen-interactive",
    name: "heygen / interactive-avatar-sdk",
    category: "Real-time Avatar Streaming",
    updated: "Updated 1 week ago",
    downloadsOrViews: "84.3k",
    likes: "2.1k",
    icon: "👤",
    badge: "WebRTC Video",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "runway-gen3",
    name: "runway / gen-3-alpha-camera-ctrl",
    category: "Generative Video • Motion Control",
    updated: "Updated 1 week ago",
    downloadsOrViews: "96.4k",
    likes: "3.2k",
    icon: "🎥",
    badge: "Cinematic Gen",
    url: "https://www.youtube.com/@TalkTechToMe"
  }
];

export const HF_TRENDING_MODELS: HFModel[] = [
  {
    id: "t-cursor",
    name: "cursor/composer-v3-claude",
    category: "AI Code Editor",
    updated: "Updated 1 day ago",
    downloadsOrViews: "37.1k",
    likes: "3.34k",
    icon: "⚡",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "t-synthesia",
    name: "synthesia/expressive-avatars",
    category: "Text-to-Video",
    updated: "Updated 3 days ago",
    downloadsOrViews: "52.4k",
    likes: "4.12k",
    icon: "🎬",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "t-claude",
    name: "anthropic/claude-code-cli",
    category: "Autonomous Terminal Agent",
    updated: "Updated 4 days ago",
    downloadsOrViews: "28.9k",
    likes: "2.85k",
    icon: "🤖",
    url: "https://substack.com/@talktechtome"
  },
  {
    id: "t-windsurf",
    name: "codeium/windsurf-cascade",
    category: "Agentic IDE Flow",
    updated: "Updated 5 days ago",
    downloadsOrViews: "18.3k",
    likes: "1.92k",
    icon: "🌊",
    url: "https://medium.com/@danielmurphy02830"
  },
  {
    id: "t-elevenlabs",
    name: "elevenlabs/voice-isolator-v2",
    category: "Audio Processing & Voice",
    updated: "Updated 6 days ago",
    downloadsOrViews: "41.6k",
    likes: "2.47k",
    icon: "🎙️",
    url: "https://www.youtube.com/@TalkTechToMe"
  }
];

export const HF_TRENDING_SPACES: HFSpace[] = [
  {
    id: "space-1",
    title: "Synthesia Studio Walkthrough 🎬",
    description: "Hands-on video demo of custom studio avatars, voice cloning fidelity, and enterprise pricing.",
    likes: 423,
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    icon: "▶",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "space-2",
    title: "Cursor AI: 3.8x Refactoring Speedup ⚡",
    description: "Benchmark testing Cursor's Composer against traditional IDEs on a complex full-stack codebase.",
    likes: 389,
    gradient: "from-[#0284C7] to-[#06B6D4]",
    icon: "⚡",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "space-3",
    title: "The Architecture of Claude Code 🤖",
    description: "Terminal workflow walkthrough: How Claude Code reads codebases, manages git, and executes bash.",
    likes: 274,
    gradient: "from-[#0D9488] to-[#10B981]",
    icon: "🛠️",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "space-4",
    title: "AI Tool Pricing & Hidden Costs 💰",
    description: "Deciphering seat tiers, token surcharges, and compute credits across leading AI services.",
    likes: 182,
    gradient: "from-[#6366F1] to-[#4F46E5]",
    icon: "📊",
    url: "https://www.youtube.com/@TalkTechToMe"
  },
  {
    id: "space-5",
    title: "Text-to-Video Model Comparison 🔮",
    description: "Side-by-side render benchmark: Synthesia vs. HeyGen vs. Runway Gen-3 on identical prompts.",
    likes: 156,
    gradient: "from-[#DB2777] to-[#9333EA]",
    icon: "✨",
    url: "https://www.youtube.com/@TalkTechToMe"
  }
];

export const HF_TRENDING_DATASETS: HFDataset[] = [
  {
    id: "data-1",
    name: "talktechtome / cursor-vs-traditional-ides",
    updated: "Updated 2 days ago",
    views: "18.4k",
    likes: "1.06k",
    url: "https://substack.com/@talktechtome"
  },
  {
    id: "data-2",
    name: "talktechtome / ai-subscription-cost-teardown",
    updated: "Updated 4 days ago",
    views: "24.1k",
    likes: "1.24k",
    url: "https://medium.com/@danielmurphy02830"
  },
  {
    id: "data-3",
    name: "talktechtome / synthesia-production-roi-analysis",
    updated: "Updated 1 week ago",
    views: "15.8k",
    likes: "894",
    url: "https://substack.com/@talktechtome"
  },
  {
    id: "data-4",
    name: "talktechtome / prompting-llms-complex-architectures",
    updated: "Updated 2 weeks ago",
    views: "12.3k",
    likes: "740",
    url: "https://substack.com/@talktechtome"
  },
  {
    id: "data-5",
    name: "talktechtome / sre-superpowers-with-ai-agents",
    updated: "Updated 3 weeks ago",
    views: "19.6k",
    likes: "1.15k",
    url: "https://medium.com/@danielmurphy02830"
  }
];

export const HF_MODALITIES = [
  { id: "text-to-video", name: "Text-to-Video", icon: "Video", count: "12 reviews" },
  { id: "ai-coding", name: "AI Code Editors", icon: "Code2", count: "18 benchmarks" },
  { id: "voice-cloning", name: "Voice & Speech", icon: "Mic", count: "10 reviews" },
  { id: "terminal-agents", name: "Autonomous CLI", icon: "Terminal", count: "8 guides" },
  { id: "pricing-eval", name: "Pricing Teardowns", icon: "Coins", count: "15 analyses" },
  { id: "architecture", name: "SRE & Architecture", icon: "Cpu", count: "20 articles" },
  { id: "image-gen", name: "Image Generation", icon: "Image", count: "9 walkthroughs" },
  { id: "workflows", name: "Full-Stack Workflows", icon: "Workflow", count: "14 demos" }
];

export const HF_DAN_ACTIVITY = [
  {
    action: "Published new deep dive review",
    target: "talktechtome/cursor-composer-benchmark",
    time: "2 hours ago",
    type: "review"
  },
  {
    action: "Released video demonstration",
    target: "talktechtome/synthesia-v4-avatar-testing",
    time: "1 day ago",
    type: "video"
  },
  {
    action: "Published newsletter analysis",
    target: "talktechtome/real-cost-of-ai-subscriptions",
    time: "3 days ago",
    type: "article"
  }
];

export const PYTHON_BENCHMARK_SNIPPET = `# Benchmark AI coding assistants with TalkTechToMe
from talktechtome import EvaluationSuite, BenchmarkRunner

runner = BenchmarkRunner(target="cursor-composer", model="claude-3.5-sonnet")

# Run real-world multi-file refactoring suite
results = runner.evaluate([
    "fullstack_database_migration",
    "type_safe_api_refactor",
    "test_generation_coverage"
])

print(f"Velocity Boost: {results.velocity_gain}x")
print(f"Token Accuracy: {results.syntax_accuracy}%")
# Output: Velocity Boost: +3.8x | Token Accuracy: 99.4%`;

export interface CareerItem {
  id: string;
  period: string;
  role: string;
  company: string;
  employmentType?: string;
  location: string;
  url?: string;
  description: string;
}

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: "career-talktechtome",
    period: "CURRENT - 2024",
    role: "Founder & AI Technology Creator",
    company: "TalkTechToMe",
    employmentType: "(creator & media)",
    location: "London / Remote",
    url: "https://talktechtome.co.uk",
    description: "Dissecting the rapid evolution of artificial intelligence and software engineering. Producing in-depth evaluations, honest reviews, and hands-on demonstrations of AI coding assistants like Cursor and generative video suites like Synthesia. Authoring technical deep dives on Substack, Medium, and YouTube to help developers, creators, and business leaders make informed decisions on cutting-edge software."
  },
  {
    id: "career-pwc",
    period: "2021 - 2024",
    role: "Head of Site Reliability Engineering (SRE)",
    company: "PwC",
    employmentType: "(fulltime)",
    location: "Belfast / London",
    url: "https://pwc.com",
    description: "Headed enterprise Site Reliability Engineering across high-scale digital operations and multi-cloud environments. Directed initiatives combining AI-driven ChatOps, intelligent anomaly detection, and automated golden signal tracking to eliminate operational toil and mitigate alert fatigue. Advocated for a culture of innovation, mentoring emerging SRE practitioners, and establishing resilient architectures across enterprise-grade platforms."
  },
  {
    id: "career-lead-architect",
    period: "2016 - 2021",
    role: "Lead Technical Architect & DevOps Strategist",
    company: "Enterprise Cloud Advisory",
    employmentType: "(fulltime)",
    location: "United Kingdom",
    url: "https://danmurphy.life",
    description: "Architected modern cloud migrations, distributed architectures, and automated CI/CD pipelines across diverse industry sectors spanning startups to Fortune 500 enterprises. Bridged complex engineering problems with high-level business goals, instituting observability, automated disaster recovery, and infrastructure-as-code principles."
  },
  {
    id: "career-senior-engineer",
    period: "2010 - 2016",
    role: "Senior Systems & Infrastructure Engineer",
    company: "Infrastructure Operations",
    employmentType: "(fulltime)",
    location: "United Kingdom",
    url: "https://danmurphy.life",
    description: "Engineered scalable server environments, virtualization clusters, and high-availability operations with 99.99% uptime SLAs. Led incident post-mortems, root-cause diagnostics, and monitoring rollouts to drastically reduce mean time to resolution (MTTR)."
  },
  {
    id: "career-l1-engineer",
    period: "2004 - 2010",
    role: "L1 Service Desk & Systems Engineer",
    company: "Technology Services",
    employmentType: "(fulltime)",
    location: "United Kingdom",
    description: "Launched a 20+ year journey in technical operations. Mastered frontline problem-solving, hardware/network troubleshooting, and user support, building the core technical foundation and operational empathy that underpinned subsequent strategic leadership roles."
  }
];

export const COLLABORATION_TYPES = [
  { id: "review", label: "Tool or Software Review", desc: "Honest, comprehensive review and testing of your product" },
  { id: "sponsorship", label: "Channel or Newsletter Sponsorship", desc: "Feature your brand in front of an engaged tech audience" },
  { id: "demo", label: "Practical Demo / Walkthrough", desc: "In-depth tutorial showing how to use your platform" },
  { id: "speaking", label: "Consulting / Speaking / Podcast", desc: "Keynotes, panel discussions, or technical advisory" },
  { id: "other", label: "General Inquiry", desc: "Have an interesting tech idea or collaboration concept?" }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  category: string;
}

export const DAN_GALLERY: GalleryPhoto[] = [
  {
    id: "photo-awards",
    src: "/media/ni-tech-awards-2026-finalist-linkedin.png",
    caption: "NI Tech Awards Finalist",
    category: "Recognition"
  },
  {
    id: "photo-keynote",
    src: "/media/IMG_3813.jpg",
    caption: "Speaking at Tech & SRE Conferences",
    category: "Keynote"
  },
  {
    id: "photo-leadership",
    src: "/media/1782974745268.jpg",
    caption: "SRE & Architecture Community",
    category: "Community"
  },
  {
    id: "photo-writing",
    src: "/media/Screenshot_20241022_161729_LinkedIn.jpg",
    caption: "Thought Leadership & Tech Writing",
    category: "Publication"
  }
];

