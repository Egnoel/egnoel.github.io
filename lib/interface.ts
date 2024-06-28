export interface simpleProjectCard{
    title: string;
    smallDescription: string;
    currentSlug: string;
}

export interface fullProject{
    currentSlug:string;
    title: string;
    tags: [string];
    titleImage: any;
    content:any;
}