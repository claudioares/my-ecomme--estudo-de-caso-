  "use client"
  import { CardProducts } from "@/components/carproducts/card.products";
  import { dataProducts } from "@/data/dataproducts/data.products";
  import { IProduct } from "@/data/model/product";


  export default function Home() {

    return (
      <>
        
          <div className={`
          flex flex-col flex-wrap gap-4 justify-center
          md:flex-row
          `}>
            {dataProducts.map((data:IProduct)=>(
              <CardProducts products={data} key={data.id}/>
            ))}
          </div>
      </>
    );
  }
