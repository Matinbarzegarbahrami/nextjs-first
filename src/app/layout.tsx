import Link from "next/link";
import NavBar from "@/componentes/NavBar/navBar";
export default function root({children}:{children:React.ReactNode;}){
return(
    <html lang="en">
        <body>
            
        
            <NavBar />
            
            {children}
            <div style={{backgroundColor:'#5b8c94ff'}}>
                <h2>footer</h2>
            </div>
        </body>
</html>);
}