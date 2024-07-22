import { CartIcon } from "./carticon/carticon";
import { Logo } from "./logo/logo";

export function Header () {
    return(
        <>
            <header className="w-full flex items-center justify-between px-10 py-6 bg-zinc-800">
                <Logo />
                <div className="w-auto h-auto cursor-pointer hover:opacity-85">
                    <CartIcon />
                </div>
            </header>   
        </>
    )
}