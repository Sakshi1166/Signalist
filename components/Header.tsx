import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <div className="flex-1 flex justify-start min-w-0">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-7 w-auto sm:h-8 cursor-pointer" priority />
                    </Link>
                </div>
                <nav className="hidden sm:flex flex-1 justify-center min-w-0">
                    <NavItems initialStocks={initialStocks} />
                </nav>
                <div className="flex-1 flex justify-end min-w-0">
                    <UserDropdown user={user} initialStocks={initialStocks} />
                </div>
            </div>
        </header>
    )
}
export default Header