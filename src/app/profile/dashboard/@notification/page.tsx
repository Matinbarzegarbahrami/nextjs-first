import Link from "next/link";
import { Card } from "@/componentes/card";
export default function Analys(){
    return (
        <Card>
            <div>Notification panel</div>
            <div>
                <Link href={`/profile/dashboard/archive`}>archive</Link>
            </div>
        </Card>
)
}