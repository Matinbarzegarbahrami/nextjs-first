import Link from "next/link";
export const metadata = {
    title: "login",
};
export default function login(){
    return(
        <div>
        <Link href={`/register`}>register</Link>
        <form action="/profile">
                <label htmlFor="username">username: </label>
                <input id="username" type="text" />
                <br />
                <label htmlFor="password">password: </label>
                <input id="password" type="password" />
                <br />
                <button type="submit">log in</button>
            </form>
        </div>
        );
}