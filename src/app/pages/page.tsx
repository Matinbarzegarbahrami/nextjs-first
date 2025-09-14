import Link from "next/link";

export const metadata={
    title:"page",
};

export default function Home(){
    const page = Array.from({length:20},(_,i)=>i+1);
    return(

            <div>
                <h1>Page List</h1>
                <ul>
                {page.map((page)=>
                <li key={page}>
                    <Link href={`/pages/${page}`} replace>page {page}</Link>
                </li>
            )}
            </ul>
            </div>

    );
}