export class HappyTravellers{
    public id: number;
    public name: string;
    public imagePath: string;
    public views: string;

    constructor(id:number,name:string,imagePath:string,views:string){
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.views = views;
    }
}