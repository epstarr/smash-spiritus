//https://www.ssbwiki.com/List_of_spirits_(disambiguation)
export class Spirit {
    public id: number;
    public name: string;
    public image: string;
    public type: string;
    public rarity: number;
    public slot: number;
    public power: number;
    public attack: number;
    public defense: number;
    // ability: string;
    // origin: string;
    constructor(id: number,name:string,image:string,type:string,rarity:number,slot:number,power:number,attack:number,defense:number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
        this.rarity = rarity;
        this.slot = slot;
        this.power = power;
        this.attack = attack;
        this.defense = defense;
    }
}
