import Link from "next/link"



export default function product({params,}:{params:{slug:string[]}}){
    
    if (params.slug?.length === 2){
        return (
            <h1>page {params.slug[0]} for {params.slug[1]}</h1>
        );
    } else if (params.slug?.length === 1){
        return (
            <h1>page {params.slug[0]}</h1>
        );
    } else{
        const slug = Array.from({length:7},(_,i)=>i+1);
        {
            return(
            slug.map((slug)=>
            <li key={slug}><Link href={`/pages/${slug}`}>page {slug}</Link></li>
            ))
        } 

    }

}