
export class OurTeam{
    public id:number;
    public name:string;
    public designation:string;
    public description:string;
    public imagePath:string

    constructor(id:number, name:string, designation:string, description:string,imagePath:string){
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.description = description;
        this.imagePath = imagePath;
    }
}