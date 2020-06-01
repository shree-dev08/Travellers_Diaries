import { SafeUrl } from '@angular/platform-browser';

export class Blog{
    public id:number;
    public name: string;
    public description: string;
    public imagePath?: SafeUrl;

    constructor(id:number,name:string, description:string , imagePath?: SafeUrl ){
        this.id=id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}