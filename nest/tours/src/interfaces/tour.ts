export interface ITour {
    name:string,
    description:string,
    tourOperator:string,
    price:string,
    img:string,
    id:string,
    type: string,
    date: string,
    _id?: string
}

export interface ITourClient{
    name: string;
    description: string;
    tourOperator: string;
    price: string;
    img: string
}