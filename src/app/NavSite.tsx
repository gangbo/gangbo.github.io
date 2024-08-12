// components/NavSite.tsx
import React from 'react';
import SiteCard from './SiteCard';

const sites = [
    {
        title: 'SVG Logo',
        description: 'Effortlessly Create Stunning SVG Logos, Unleash Your Creativity!',
        url: 'https://gangbo.github.io/font-to-svg/'
    },
    // 添加更多站点信息
    {
        title: 'SVG Backgrounds',
        description: 'Free SVG Backgrounds and Patterns',
        url: 'https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/'
    }
];

const NavSite: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {sites.map((site, index) => (
                <SiteCard key={index} title={site.title} description={site.description} url={site.url}/>
            ))}
        </div>
    );
};

export default NavSite;
