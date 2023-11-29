import { RiMenuLine } from "react-icons/ri"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { links } from "@/lib/constants"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

export function SheetDemo() {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <RiMenuLine variant="outline" className="text-[#b6bcc8] hover:text-gray-700 w-auto h-7 lg:hidden transition-all" />
            </SheetTrigger>
            <SheetContent side={"left"} className="pt-16">
                {links.map((link, idx) => (
                    <div key={idx} className="mt-3">
                        {pathname === link.href ? (
                            <Link href={link.href} className='text-lg font-semibold text-[#1d2025]'>
                                {link.name}
                            </Link>
                        ) : (
                            <Link
                                href={link.href}
                                className='text-lg font-semibold text-[#1d2025] trasition-all duration-100 
                                        hover:text-[#1d2025] hover:border-b-4 hover:border-b-[#ff7d1a]'
                            >
                                {link.name}
                            </Link>
                        )}
                    </div>
                ))}
            </SheetContent>
        </Sheet>
    )
}