import Link from "next/link";
import { Film } from "lucide-react";

export default function TextLogo() {
    return (
        <Link href="/" className="flex items-center gap-2 group select-none">
            <span className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Film className="h-6 w-6 text-primary" />
            </span>
            <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary via-pink-500 to-orange-400 bg-clip-text text-transparent">
                FilmFindr
            </span>
        </Link>
    );
}