class Board{
    constructor(){
        this.cols = 6;
        this.rows = 7;
        this.spaces = this.createSpaces();
    }
    createSpaces(){
        const spaces = [];

        for (let x = 0; x < this.cols; x++){
            const column = [];
            for (let y = 0; y < this.rows; y++ ){
                const space = new Space (x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }

    drawHTMLBoard(){

        for (let column of this.spaces){
            for (let space of column){
                space.drawSVGSpace();
            }
        }
    }


}