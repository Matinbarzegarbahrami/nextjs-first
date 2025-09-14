import Link from "next/link";
export default async function Article(
    {params,searchParams,}:{
        params:Promise<{articleId : string}>;
        searchParams : Promise<{ lang? : "en" | "fr" | "es"}>;
    }
){
    const {articleId} = await params;
    const { lang = "en"} = await searchParams;
    if(lang==="en"){
        return(
        <div>
            <div>
                <h1>News : {articleId}</h1>
                <h3>reading in {lang}</h3>
            </div>
        <div>
            <Link href={`/article/${articleId}?lang=en`} style={{margin:"10px"}}>english</Link>
            <Link href={`/article/${articleId}?lang=fr`} style={{margin:"10px"}}>franch</Link>
            <Link href={`/article/${articleId}?lang=es`} style={{margin:"10px"}}>spain</Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit, maxime qui omnis veniam iste modi quia quibusdam earum adipisci molestiae dignissimos labore natus nihil consequuntur nostrum illum facere velit commodi enim architecto. Obcaecati expedita eum incidunt magnam ducimus asperiores.</p>
        </div>
    );
    }else if (lang==="es"){
        return(
        <div>
            <div>
                <h1>noticias : {articleId}</h1>
                <h3>leyendo en {lang}</h3>
            </div>
        <div>
            <Link href={`/article/${articleId}?lang=en`} style={{margin:"10px"}}>english</Link>
            <Link href={`/article/${articleId}?lang=fr`} style={{margin:"10px"}}>franch</Link>
            <Link href={`/article/${articleId}?lang=es`} style={{margin:"10px"}}>spain</Link>
        </div>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló tal manera. </p>
        </div>
    );
} else if(lang==="fr"){
    return(
        <div>
            <div>
                <h1>nouvelles : {articleId}</h1>
                <h3>lire dans {lang}</h3>
            </div>
        <div>
            <Link href={`/article/${articleId}?lang=en`} style={{margin:"10px"}}>english</Link>
            <Link href={`/article/${articleId}?lang=fr`} style={{margin:"10px"}}>franch</Link>
            <Link href={`/article/${articleId}?lang=es`} style={{margin:"10px"}}>spain</Link>
        </div>
    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    </div>
    );
};
}

