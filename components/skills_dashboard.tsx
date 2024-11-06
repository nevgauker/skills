'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Database, Cloud, Lock, Bug, Settings, Layout, Users } from 'lucide-react';

const SkillsDashboard = () => {
    const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

    const skills = [
        {
            title: "Front-end Development",
            icon: <Layout className="w-6 h-6" />,
            color: "bg-blue-500",
            details: ["HTML5, CSS3, JavaScript (ES6+)", "Modern frameworks (React, Vue, or Angular)", "Responsive design principles", "Web accessibility standards"]
        },
        {
            title: "Back-end Development",
            icon: <Code className="w-6 h-6" />,
            color: "bg-green-500",
            details: ["Server-side languages (Python, Node.js, Java, PHP)", "RESTful API development", "Database management and SQL", "Server architecture"]
        },
        {
            title: "Database Management",
            icon: <Database className="w-6 h-6" />,
            color: "bg-yellow-500",
            details: ["SQL databases (MySQL, PostgreSQL)", "NoSQL databases (MongoDB, Redis)", "Database design and optimization", "Query writing and optimization"]
        },
        {
            title: "Version Control",
            icon: <Code className="w-6 h-6" />,
            color: "bg-purple-500",
            details: ["Git fundamentals", "Collaborative development workflows", "Branch management", "Code review processes"]
        },
        {
            title: "Cloud Services",
            icon: <Cloud className="w-6 h-6" />,
            color: "bg-indigo-500",
            details: ["AWS, Azure, or Google Cloud", "Cloud deployment", "Serverless architecture", "Container technologies (Docker, Kubernetes)"]
        },
        {
            title: "Security Best Practices",
            icon: <Lock className="w-6 h-6" />,
            color: "bg-red-500",
            details: ["Authentication/Authorization", "Data encryption", "Web security (HTTPS, XSS, CSRF)", "Security best practices"]
        },
        {
            title: "Testing and Debugging",
            icon: <Bug className="w-6 h-6" />,
            color: "bg-orange-500",
            details: ["Unit testing", "Integration testing", "Debugging tools", "Test-driven development"]
        },
        {
            title: "Development Tools",
            icon: <Settings className="w-6 h-6" />,
            color: "bg-teal-500",
            details: ["Command line proficiency", "Package managers (npm, pip)", "Build tools (Webpack, Babel)", "IDE proficiency"]
        },
        {
            title: "System Design",
            icon: <Layout className="w-6 h-6" />,
            color: "bg-pink-500",
            details: ["Architecture patterns", "Scalability principles", "Performance optimization", "Microservices architecture"]
        },
        {
            title: "Soft Skills",
            icon: <Users className="w-6 h-6" />,
            color: "bg-gray-500",
            details: ["Problem-solving ability", "Team collaboration", "Communication skills", "Project management"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Top 10 Full Stack Developer Skills
                </h1>

                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedSkill(expandedSkill === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                                        {skill.icon}
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {index + 1}. {skill.title}
                                    </h2>
                                </div>
                                {expandedSkill === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            {expandedSkill === index && (
                                <div className="px-6 py-4 bg-gray-50">
                                    <ul className="space-y-2">
                                        {skill.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center space-x-2">
                                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                <span className="text-gray-600">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsDashboard;