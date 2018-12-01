class Player{
    constructor(name, color, id, active = false){
        this.name = name;
        this.color = color;
        this.id = id;
        this.active = active;
        this.tokens = [];
    }
}