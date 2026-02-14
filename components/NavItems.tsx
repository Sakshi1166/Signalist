'use client'

import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SearchCommand from "@/components/SearchCommand";

const NavItems = ({initialStocks}: { initialStocks: StockWithWatchlistStatus[]}) => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';

        return pathname.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row items-stretch sm:items-center p-2 gap-0 sm:gap-6 md:gap-8 lg:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, label }) => {
                if(href === '/search') return (
                    <li key="search-trigger" className="py-2 sm:py-0">
                        <SearchCommand
                            renderAs="text"
                            label="Search"
                            initialStocks={initialStocks}
                        />
                    </li>
                )

                return (
                    <li key={href} className="py-2 sm:py-0 border-b border-gray-700 sm:border-0">
                        <Link
                            href={href}
                            className={`block py-1 sm:py-0 hover:text-yellow-500 transition-colors ${
                                isActive(href) ? 'text-gray-100' : ''
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}
export default NavItems