'use client'
import { createContext, ReactNode, useState } from "react"
import { IProduct } from "../model/product";
import { IShoppingCart } from "../model/shopping.cart";

interface PropsContextApi {
    itens: IShoppingCart[]
    qtdItens: number
    addProduct: (item:IProduct) => void
    removeProduct: (item:IProduct) => void
}

export const contextApi = createContext<PropsContextApi>({} as PropsContextApi);
export default function ContextProvider ({children}:{children:ReactNode}) {
    const [itens, setItens] = useState<IShoppingCart[]>([]);
    function addProduct (product:IProduct) {
        const indice = itens.findIndex(i => i.product.id === product.id);

        if(indice === -1) {
            setItens([...itens, {product, quantity: 1}])
        } else {
            const newItens =[...itens]
            newItens[indice].quantity++
            setItens(newItens)
        }
    }

    function removeProduct (product:IProduct) {
        const newItens = itens.map(i => {
            if(i.product.id === product.id){
                i.quantity--
            }

            return i
        })
        .filter(i => i.quantity > 0);

        setItens(newItens);
    }
    return(
        <contextApi.Provider value={{
           itens,
           addProduct,
           removeProduct,
           get qtdItens() {
                return itens.reduce((all, item)=>all + item.quantity, 0)
           },
        }}>
            {children}
        </contextApi.Provider>
    )
}