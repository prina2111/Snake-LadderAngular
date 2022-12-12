import { Component } from '@angular/core';
import { Player } from './player';
import { DicedataService } from '../dicedata.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  constructor(private dicedataService:DicedataService){}

  players:Player[] = [{ "id":1 , "name":"Player 1"},{"id":2,"name":"Player 2"}]

  roll( id:number, name:string, min:number, max:number){
   
    
      var generatedNum:number  = Math.floor(Math.random() * (max - min + 1) + min)
      this.dicedataService.setPlayer(id,generatedNum)

      var generatedNum:number  = Math.floor(Math.random() * (max - min + 1) + min)

      var disableButton = document.getElementById(id.toString()) as HTMLButtonElement;
      disableButton.disabled = true

      var buttonToBeEnabled:number = (id%this.players.length) + 1;

      var enableButton = document.getElementById(buttonToBeEnabled.toString()) as HTMLButtonElement;
      enableButton.disabled = false
      
    console.log(generatedNum);
  }
}
