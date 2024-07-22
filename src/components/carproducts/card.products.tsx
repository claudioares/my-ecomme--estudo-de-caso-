import { UseShoppingCart } from "@/data/hooks/use.shopping.cart"
import { IProduct } from "@/data/model/product"
import Image from "next/image"

type PropsCardProducts = {
    products:IProduct
}
export function CardProducts (props:PropsCardProducts) {
    const { addProduct } = UseShoppingCart()
    const { name, description, price, image } = props.products;

    
    return(
        <>
            <div className="flex flex-col w-80 bg-zinc-900 text-white">
                <div className="relative w-full h-52">
                    <Image src={image} alt={name} fill className="object-cover"/>
                </div>
                <div className="flex-1 flex flex-col gap-4 p-5">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="flex-1 text-sm text-zinc-400">{description}</p>
                    <div className="flex justify-between items-center text-xl">
                        <span className="text-lg font-semibold mt-2">R${price.toFixed(2)}</span>
                        <button onClick={()=>addProduct(props.products)} className="border rounded-full px-4 py-1">Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    )
}