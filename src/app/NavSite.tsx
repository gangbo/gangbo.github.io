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
    },
    {
        title: '思维导图',
        description: 'Markdown 思维导图生成工具，轻松将 Markdown 文本转换为 SVG 格式的思维导图',
        url: 'https://markup-1nj.pages.dev/'
    }
];

const NavSite: React.FC = () => {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
                {sites.map((site, index) => (
                    <div key={index} className="transform transition-all duration-300 hover:scale-105 h-full">
                        <SiteCard title={site.title} description={site.description} url={site.url}/>
                    </div>
                ))}
            </div>
            
            {/* 添加"添加更多"卡片 */}
            <div className="mt-12 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                    更多实用工具正在添加中...
                </p>
            </div>
        </div>
    );
};

export default NavSite;
