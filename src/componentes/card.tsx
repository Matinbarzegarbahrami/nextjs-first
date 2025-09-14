export const Card= ({children}: {children:React.ReactNode}) =>{
    const cardStyle={
        padding: "100px",margin:"10px",border:"1px solid black"
    };
    return(
        <div style={cardStyle}>{children}</div>
    )
}