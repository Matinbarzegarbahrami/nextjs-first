const boxstyle = {
    display: "flex"
};
export default function ComplexDashboardLayout(
    {
        children,
        notification,
        analys,
    }: {
        children :React.ReactNode;
        notification :React.ReactNode;
        analys :React.ReactNode;
    }
){
    return(
        <div>
            <div style={boxstyle}>
                <div>
                    {notification}
                </div>
                <div>
                    {analys}
                </div>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}