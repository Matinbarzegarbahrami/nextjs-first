import notFound from "@/app/not-found";
import Link from "next/link";
import { redirect} from "next/navigation";

export const metadata = {
    title: "product",
};

export default function product({params,}:{params:{slug:string[]}}){
    
    if (params.slug?.length === 2){
        if (parseInt(params.slug[1])>5){
            redirect(`/product/${params.slug[0]}`)
            
        }
        else{
        return (
            <h1>page {params.slug[0]} for {params.slug[1]}</h1>
        );
        }
    } else if (params.slug?.length === 1){
        
        if(parseInt(params.slug[0])>7){
            return(
            notFound()
            );
        }
        else{
            const slugList = Array.from({length :5}, (_,i) => i+1);
            return (
        <>
        <h1>page {params.slug[0]}</h1>
            <ul>
                {slugList.map((s) => (
                <li key={s}><Link href={`/product/${params.slug[0]}/${s}`}>product {s}</Link></li>
                ))}
            </ul>
        </>
        );
        }
        
    } else{
        const slug = Array.from({length:7},(_,i)=>i+1);
        {
            
            return (
    <div>
        <h2>Products</h2>
        <ul>
            {slug.map((slug) => (
            <li key={slug}>
                <Link href={`/product/${slug}`}>Product {slug}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
        } 

    }

}