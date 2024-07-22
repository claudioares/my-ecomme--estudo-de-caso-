import { IShoppingCart } from "@/data/model/shopping.cart"
import { DiamondMinus, DiamondPlus, Equal, X } from "lucide-react"
import Image from "next/image"

type PropsShoppingCartArea = {
    item: IShoppingCart
    addProduct?: (item:IShoppingCart) => void
    removeProduct?: (item:IShoppingCart) => void
}

export function ShoppingCartArea (props:PropsShoppingCartArea) {
    return(
        <>
            <div className="flex items-center gap-6 bg-zinc-900 rounded-md overflow-hidden w-full h-56 text-white">
                <div className="relative w-[40%] h-full">
                    <Image 
                        src={props.item.product.image}
                        alt={props.item.product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full flex pr-4 py-4">
                    <div className="flex flex-col justify-center flex-1 gap-2">
                        <span className="text-2xl font-bold">{props.item.product.name}</span>
                        <span className="text-xl text-zinc-400">{props.item.product.description}</span>

                        <div className="flex items-center gap-1 mt-2 text-zinc-400 text-lg font-bold">
                            <span>R$ {props.item.product.price.toFixed(2)}</span>
                            <X size={15} className="mb-1"/>
                            <span>{props.item.quantity}</span>
                            <Equal size={15} className="mb-1"/>
                            <span className="text-yellow-500">
                                R$ {(props.item.product.price * props.item.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center px-5">
                        <button onClick={()=>props.removeProduct?.(props.item)} className="hover:opacity-85"><DiamondMinus /></button>
                        <span className="flex items-center justify-center w-20 h-14 px-4 py-2 rounded-md bg-black">
                            {props.item.quantity}
                        </span>
                        <button onClick={()=>props.addProduct?.(props.item)} className="hover:opacity-85"><DiamondPlus /></button>
                    </div>   
                </div>
            </div>
        </>
    )
}