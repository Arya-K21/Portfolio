export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    year: string;
    role: string;
    gradient: string; // For the preview card background if no image
    categories: string[];
    techStack: string[];
    githubUrl?: string; // Optional if some projects are private
    domain: "Design" | "Development"; // Required for filtering logic in page.tsx
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "fintech-dashboard",
        title: "FinanceFlow",
        description: "Reimagining personal finance management with a calm, clutter-free interface.",
        year: "2025",
        role: "Lead Designer",
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)", /* Kept darker for contrast */
        categories: ["Product Design", "Fintech"],
        techStack: ["Next.js", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },
    {
        id: "2",
        slug: "travel-app",
        title: "Vanderlust",
        description: "A travel exploration app focusing on serendipitous discovery and local gems.",
        year: "2024",
        role: "UX/UI Designer",
        gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
        categories: ["Mobile App", "Travel"],
        techStack: ["React Native", "Expo", "Reanimated"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },
    {
        id: "3",
        slug: "health-tracker",
        title: "Vitality",
        description: "Holistic health tracking that encourages positive habits without data overload.",
        year: "2024",
        role: "Frontend Developer",
        gradient: "linear-gradient(135deg, #f0fdf4 0%, #16a34a 100%)", /* Adjusted green for dark mode */
        categories: ["Web App", "Health"],
        techStack: ["Vue.js", "Pinia", "Chart.js"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Development"
    },
    {
        id: "4",
        slug: "smart-home",
        title: "Lumina Hub",
        description: "Centralized control for smart homes with an emphasis on accessibility.",
        year: "2023",
        role: "UX Researcher",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        categories: ["IoT", "User Research"],
        techStack: ["React", "Socket.io", "Node.js"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },
    {
        id: "5",
        slug: "e-commerce-redesign",
        title: "Fashion Forward",
        description: "Modernizing the shopping experience for a sustainable fashion brand.",
        year: "2023",
        role: "UI Designer",
        gradient: "linear-gradient(135deg, #fff1f2 0%, #f43f5e 100%)",
        categories: ["E-Commerce", "Branding"],
        techStack: ["Shopify", "Liquid", "SASS"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },
];