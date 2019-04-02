export class Spirit {
    public id: number;
    public name: string;
    public image: string;
    public type: string;
    // class: number;
    // slot: number;
    // min_power: number;
    // max_power: number;
    // min_attack: number;
    // max_attack: number;
    // min_defense: number;
    // max_defense: number;
    // ability: string;
    // origin: string;
    constructor(id: number,name:string,image:string,type:string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}
