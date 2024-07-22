"use client"
import { EmptyCart } from "@/components/emptycart/empty.cart";
import { ShoppingCartArea } from "@/components/shoppingcartarea/shopping.cart.area";
import { UseShoppingCart } from "@/data/hooks/use.shopping.cart";
import { CheckoutAmount } from "@/components/checkoutamount/checkout.amount"

export default function ShoppingCart () {
    const {itens, addProduct, removeProduct} = UseShoppingCart()
    return(
        <>
            {itens.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <div className="flex flex-col gap-4 w-2/4">
                        {itens.map(item => (
                            <ShoppingCartArea 
                                item={item} 
                                key={item.product.id} 
                                addProduct={(item) => addProduct(item.product)} 
                                removeProduct={(item) => removeProduct(item.product)}
                            />
                        ))}
                        <CheckoutAmount itens={itens} />
                    </div>
                </>
            )}

           
        </>
    )
}