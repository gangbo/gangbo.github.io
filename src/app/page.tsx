import Image from "next/image";
import NavSite from "@/app/NavSite";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            实用工具集
                        </span>
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        精选高质量工具网站，提升您的工作效率
                    </p>
                </div>
                
                <div className="relative z-10">
                    <NavSite />
                </div>
                
                <footer className="mt-20 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} 实用工具集. 保留所有权利。</p>
                </footer>
            </div>
            
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-40 right-1/4 w-70 h-70 bg-pink-300 dark:bg-pink-900 rounded-full filter blur-3xl"></div>
            </div>
        </main>
    );
}
