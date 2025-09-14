import Link from "next/link";
export const metadata = {
    title: "register",
};
export default function register(){
    return(
        <div>
            <Link href={`/login`}>login</Link>
        <form action="/profile">
                <label htmlFor="username">username: </label>
                <input id="username" type="text" />
                <br />
                <label htmlFor="password">password: </label>
                <input id="password" type="password" />
                <br />
                <label htmlFor="password-2">repeat password: </label>
                <input id="password-2" type="password" />
                <br />

                <button type="submit">log in</button>
            </form>
        </div>
    );
}