import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DicedataService {

  constructor() { }

  dicedataobs = new Subject<any>();

  // board:number[][] = [[100,99,98,97,96,95,94,93,92,91],
  // [81,82,83,84,85,86,87,88,89,90],[80,79,78,77,76,75,74,73,72,71],[61,62,63,64,65,66,67,68,69,70,],[60,59,58,57,56,55,54,53,52,51],[41,42,43,44,45,46,47,48,49,50],[40,39,38,37,36,35,34,33,32,31],[21,22,23,24,25,26,27,28,29,30],[20,19,18,17,16,15,14,13,12,11],[1,2,3,4,5,6,7,8,9,10]];

  board:number[] = [100,99,98,97,96,95,94,93,92,91,81,82,83,84,85,86,87,88,89,90,80,79,78,77,76,75,74,73,72,71,61,62,63,64,65,66,67,68,69,70,60,59,58,57,56,55,54,53,52,51,41,42,43,44,45,46,47,48,49,50,40,39,38,37,36,35,34,33,32,31,21,22,23,24,25,26,27,28,29,30,20,19,18,17,16,15,14,13,12,11,1,2,3,4,5,6,7,8,9,10];

  position1:number = 1;
  position2:number = 1;
 
  snakeHead:number[] = [98,77]
  snakeTail:number[] = [36,2]
  ladderStart:number[] = [16,5]
  ladderClimb:number[] = [68,90]

  setPlayer(id:number,generatedNum:number){
    if(id == 1){
      this.position1  = this.position1 + generatedNum;
      // this.position1 = 5
    } else{
      this.position2  = this.position2 + generatedNum;
    }
    
    this.dicedataobs.next({"id":id,"generatedNum":generatedNum,"position1":this.position1,"position2":this.position2});
  }

 

}
