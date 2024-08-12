import Image from "next/image";
import NavSite from "@/app/NavSite";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className={"text-4xl"}>
                    Some useful sites
                </h1>
            </div>
            <div className="flex">
                <NavSite />
            </div>
            <div className="flex-1">

            </div>
        </main>
    );
}
