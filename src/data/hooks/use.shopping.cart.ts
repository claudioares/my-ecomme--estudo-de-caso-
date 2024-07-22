import { contextApi } from "@/data/contextapi/context.api";
import { useContext } from "react";

export function UseShoppingCart () {
    return useContext(contextApi)
}