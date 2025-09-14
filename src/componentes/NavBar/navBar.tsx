"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar(){
    const navLink = [
        { name: "pages", address: "/pages"},
        { name: "products", address: "/product"}
    ]
    const router = useRouter()
    const handleProfileButton = () => {
        router.push("/profile")
    }
    const handleRegisterLogin = () => {
        router.push("/login")
    }
    const [input, setInput] = useState("");
    return(
    <div style={{backgroundColor:'#f99999ff', marginBottom:"20px"}}>
        <Link href={'/'}><h2 style={{marginLeft:"10px"}}>Head Title</h2></Link>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
            {navLink.map((link)=>
            {
                return(
                    <Link href={`${link.address}`} style={{margin:"10px"}}>{`${link.name}`}</Link>
                );
            }
            )
            }
            <form action="#">
        <input placeholder="Enter subject ..." style={{margin:"10px"}} value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button type="submit">search</button>
        </form>
        </div>
        <div >
            <button onClick={handleProfileButton} style={{margin:"10px"}}>profile</button>
            <button onClick={handleRegisterLogin} style={{margin:"10px"}}>login/register</button>
        </div>
        
        </div> 
    </div>
    );
}