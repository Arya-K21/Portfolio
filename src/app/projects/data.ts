export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    year: string;
    role: string;
    gradient: string; // For the preview card background if no image
    categories: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "fintech-dashboard",
        title: "FinanceFlow",
        description: "Reimagining personal finance management with a calm, clutter-free interface.",
        year: "2025",
        role: "Lead Designer",
        gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        categories: ["Product Design", "Fintech"],
    },
    {
        id: "2",
        slug: "travel-app",
        title: "Vanderlust",
        description: "A travel exploration app focusing on serendipitous discovery and local gems.",
        year: "2024",
        role: "UX/UI Designer",
        gradient: "linear-gradient(135deg, #fefce8 0%, #fef08a 100%)",
        categories: ["Mobile App", "Travel"],
    },
    {
        id: "3",
        slug: "health-tracker",
        title: "Vitality",
        description: "Holistic health tracking that encourages positive habits without data overload.",
        year: "2024",
        role: "Frontend Developer",
        gradient: "linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)",
        categories: ["Web App", "Health"],
    },
    {
        id: "4",
        slug: "smart-home",
        title: "Lumina Hub",
        description: "Centralized control for smart homes with an emphasis on accessibility.",
        year: "2023",
        role: "UX Researcher",
        gradient: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
        categories: ["IoT", "User Research"],
    },
    {
        id: "5",
        slug: "e-commerce-redesign",
        title: "Fashion Forward",
        description: "Modernizing the shopping experience for a sustainable fashion brand.",
        year: "2023",
        role: "UI Designer",
        gradient: "linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)",
        categories: ["E-Commerce", "Branding"],
    },
];
