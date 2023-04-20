export class Hobby {
    id:string;
    categoryIds: string[];
    title:string;
    imageURL:string;
    characteristics:string[];

    constructor(
        id:string,
        categoryIds:string[],
        title:string,
        imageURL:string,
        characteristics:string[]
    ){
        this.id = id;
        this.categoryIds = categoryIds;
        this.title=title;
        this.imageURL=imageURL;
        this.characteristics = characteristics;
    }

}