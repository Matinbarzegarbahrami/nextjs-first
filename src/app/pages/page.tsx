import Link from "next/link";
import product from "../product/[[...slug]]/page";

export const metadata={
    title:"sad",
};

export default function Home(){
    const page = Array.from({length:20},(_,i)=>i+1);
    return(

            <div>
                <h1>Page List</h1>
                {page.map((page)=>
                <li key={page}>
                    <Link href={`/pages/${page}`} replace>page {page}</Link>
                </li>
            )}
            </div>

    );
}