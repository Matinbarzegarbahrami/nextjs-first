import Link from "next/link";

export default function NavBar(){
    return(
    <div style={{backgroundColor:'#f99999ff', marginBottom:"20px"}}>
        <h2 style={{}}>Head</h2>
        <div style={{display:"flex"}}>
            <Link href={"/pages"} style={{margin:"10px"}}>pages</Link><br />
            <Link href={"/product"} style={{margin:"10px"}}>products</Link>
        </div>
    </div>
    );
}