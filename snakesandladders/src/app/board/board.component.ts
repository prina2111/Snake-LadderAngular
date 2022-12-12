import { Component } from '@angular/core';
import { DicedataService } from '../dicedata.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
 

constructor(private dicedataService:DicedataService){}

ngOnInit(){
  this.dicedataService.dicedataobs.subscribe((data)=>{
    console.log("aaa")
    console.log(data);
    if(data.id == 1){
      if(this.snakeHead.includes(data.position1)){
        var snakeTailIndex:number = this.snakeHead.indexOf(data.position1);
      this.position1 = this.snakeTail[snakeTailIndex];
      }
  else if(this.ladderStart.includes(data.position1)){
    var ladderClimbIndex:number = this.ladderStart.indexOf(data.position1);
  this.position1 = this.ladderClimb[ladderClimbIndex];
  }
      else
          this.position1 = data.position1;
    }

    else{
      if(this.snakeHead.includes(data.position2)){
        var snakeTailIndex:number = this.snakeHead.indexOf(data.position2);
      this.position2 = this.snakeTail[snakeTailIndex];
      }
  else if(this.ladderStart.includes(data.position2)){
    var ladderClimbIndex:number = this.ladderStart.indexOf(data.position2);
  this.position2 = this.ladderClimb[ladderClimbIndex];
  }
  else
      this.position2 = data.position2;
    }
      
  });
}

  board:number[] = this.dicedataService.board;
  position1:number = this.dicedataService.position1;
  position2:number = this.dicedataService.position2;
  snakeHead:number[] = this.dicedataService.snakeHead;
  snakeTail:number[] = this.dicedataService.snakeTail;
  ladderStart:number[] = this.dicedataService.ladderStart;
  ladderClimb:number[] = this.dicedataService.ladderClimb;

}
