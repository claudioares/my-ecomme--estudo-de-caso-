import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function EmptyCart () {
    return(
        <>
            <div className="flex  flex-col items-center gap-4 text-zinc-400">
            <ShoppingCart size={100} />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl">Seu carrinho esta vazio</h2>
                <p>Adicione produtos no botão abaixo</p>
            </div>

            <Link href="/" className="bg-green-500 text-white rounded-md px-4 py-2 hover:opacity-85">
                Ver produtos
            </Link>

            </div>
        </>
    )
}