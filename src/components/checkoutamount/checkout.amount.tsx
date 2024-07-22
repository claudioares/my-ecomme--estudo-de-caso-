import { IShoppingCart } from "@/data/model/shopping.cart"

type PropsChekoutAmount = {
    itens: IShoppingCart[]
}

export function CheckoutAmount (props:PropsChekoutAmount) {
    const checkoutAmountAll = props.itens.reduce((acc, item)=> acc + item.product.price * item.quantity, 0)
    return(
        <>
            <div className="flex items-center justify-between bg-zinc-900 px-8 py-4">
                <div className="flex flex-col justify-between">
                    <span className="text-zinc-500">Total</span>
                    <span className="text-3xl font-bold text-yellow-500">R$ {checkoutAmountAll.toFixed(2)}</span>
                </div>

                <button className="bg-green-600 px-4 py-2 rounded-lg text-xl text-zinc-200 hover:opacity-85">Finalizar</button>
            </div>
        </>
    )
}