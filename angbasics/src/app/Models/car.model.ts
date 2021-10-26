export class Cars {
    hide:boolean;

    constructor(
        public name: string, 
        public manufacturer: string, 
        public price: number, 
        public year: number, 
        public imagepath:string, 
        hidden:boolean
    ){
        this.hide = hidden;
    }
}