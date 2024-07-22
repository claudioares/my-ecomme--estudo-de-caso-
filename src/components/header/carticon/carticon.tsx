"use client"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { UseShoppingCart } from "@/data/hooks/use.shopping.cart";

export const CartIcon = () => {
    const {qtdItens} = UseShoppingCart();
    return (
        <Link href="/shoppingcart" className="hover:opacity-85" aria-label="Shopping Cart">
            <div className="relative">
                <ShoppingCart color="white" size={25}/>
                <div
                    className="
                        absolute flex items-center justify-center
                        bg-red-600 text-white rounded-full w-7 h-7
                        -top-1 -right-1"
                >
                    <span className="text-lg text-center">{qtdItens}</span>
                </div>
            </div>
        </Link>
    );
};
