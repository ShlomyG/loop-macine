import { Component, OnInit } from '@angular/core';
import { MainService, Pad } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //sounds list With own Howl player (Pad is interface i created in service)
  padslist : Pad[] =[]
  // list of chosen sounds
  playlist = []
  // on/off music
  activePads : boolean = false; 
  // boolean to check if enter to new loop
  newloop 
  
  constructor( 
       public ms:MainService
       ) { }

  public ngOnInit(): void {
    // get sounds details from service
    this.padslist = this.ms.pads
  }
  
  // insert new pad sound to playlist array
  addToPlaylist(pad: Pad){
    pad.inPlaylist = true
    this.playlist.push(pad)
  }
   // remove the chosen pad sound from playlist array
  removeFromPlaylist(pad: Pad){
    pad.inPlaylist = false
    pad.player.stop();
    this.playlist= this.playlist.filter(p => p.name != pad.name);
  }

  // 
  playPads(){
    // for loop that runs on sounds that clicked and play all of them
    for (let sound of this.playlist) {
      sound.player.play();
    }
    // change "activePads" to true
          this.activePads=true
          // check after 8 sec if keep playing sounds and start new loop or stop it with setInterval
          this.newloop = setInterval(()=>{
            if(this.activePads){
              for (let sound of this.playlist) {
                sound.player.play();
                  }
          }
           },8000) 
  }

    // click stop button 
       stopAllPads(){
         // change "activePads" to true and stop intrval active ("newloop") with clear interval
         this.activePads=false
         clearInterval(this.newloop);
         // for loop that runs on sounds that clicked and stop to playing all of them
          for (let sound of this.playlist) {
          sound.player.stop();
            }

  }
}
