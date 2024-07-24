// components/SiteCard.tsx
import React from 'react';

interface SiteCardProps {
    title: string;
    description: string;
    url: string;
}

const SiteCard: React.FC<SiteCardProps> = ({ title, description, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </a>
    );
};

export default SiteCard;
