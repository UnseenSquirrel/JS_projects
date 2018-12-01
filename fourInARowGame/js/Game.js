class Game{
   constructor(board, players, ready){
       this.board = new Board();
       this.players = this.createPlayers();
       this.ready = false;

   }

   createPlayers(){
        const players = [new Player('Player 1', 1, '#e12358', true), 
        new Player('Player 2', 2, '#e59a58') ];
        return players;
   }

   startGame(){

    
   }
}