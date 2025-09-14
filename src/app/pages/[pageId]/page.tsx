
import notFound from "./not-found";
import { Metadata } from "next";

type Props={
    params:{
        pageId:string;
    };
};

export const generateMetadata=(
    ({ params }:Props): Metadata =>{
        return{
            title:`page ${params.pageId}`,
            
        };
    }
)

export default function pageId(
    {params,}:{params:{pageId:string}} 
){
    if (parseInt(params.pageId)>20){
        return(notFound());
    }else{
        return(
            <div>
        <h1>page {params.pageId}</h1>
            </div>
);
    }

}