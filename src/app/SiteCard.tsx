// components/SiteCard.tsx
import React from 'react';

interface SiteCardProps {
    title: string;
    description: string;
    url: string;
}

const SiteCard: React.FC<SiteCardProps> = ({ title, description, url }) => {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 dark:border-gray-700 transform hover:-translate-y-1 hover:border-blue-400 h-full"
        >
            <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">{description}</p>
                <div className="mt-auto">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        访问网站
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    );
};

export default SiteCard;
