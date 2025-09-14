import Link from "next/link";

export default async function Home() {
    await new Promise((resolve) => {
        setTimeout(() => {
        resolve("intentional delay");
    }, 2000);
    });
    return (
        <div>
        <h1>Home</h1>
        <Link href={`/article/Breaking-news?lang=en`}>Breaking news</Link>
    </div>
    );
}

