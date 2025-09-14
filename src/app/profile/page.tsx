import Link from "next/link";
export const metadata = {
    title: "Profile",
};

export default function profile(){

    return(
        <div>
            <div>
            <h2>Profile Page</h2>
            </div>
            <div>
                <Link href={`/profile/dashboard`}>user dashboard</Link>
            </div>
        </div>
    );
}