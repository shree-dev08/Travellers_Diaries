
export class Trip{
    public id:number;
    public title:string;
    public budget:number;
    public imagePath:string;
    public description:string;

    constructor(id:number,title:string,budget:number,imagePath:string,description:string){
            this.id = id;
            this.title = title;
            this.budget = budget;
            this.imagePath = imagePath;
            this.description = description;
    }
}