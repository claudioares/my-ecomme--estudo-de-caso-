import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export const Logo = () => {
    return(
        <Link href='/' className="h-auto w-auto hover:opacity-85">
            <div className="flex flex-col items-center justify-center gap-2">
                <ShoppingBag color="white" size={25}/>
                <h1 className="text-2xl text-white">A Z</h1>
            </div>
        </Link>
    )
}