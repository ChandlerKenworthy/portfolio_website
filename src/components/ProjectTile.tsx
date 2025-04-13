import { IBM_Plex_Mono } from "next/font/google";

const ibmPlex = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
});

interface ProjectTileProps {
    title: string;
    link: string;
    techStack: string[];
    children: React.ReactNode;
};

export default function ProjectTile({ title, link, techStack, children } : ProjectTileProps) {
    return (
        <div className="flex-1 bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className={`text-xl font-bold mb-2 ${ibmPlex.className}`}>{title}</h2>
            {techStack && <div className="flex flex-wrap gap-3 justify-left mb-3">
                {techStack.map(skill => (
                <span key={skill} className="bg-blue-700 px-3 py-1 rounded-lg text-sm">
                    {skill}
                </span>
                ))}
            </div>}
            {children}
            <div className="mt-4">
                <a href={link} className="text-blue-400 hover:underline">View Project</a>
            </div>
        </div>
    );
}