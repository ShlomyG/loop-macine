import { Injectable } from '@angular/core';
import {Howl, Howler} from 'howler';

export interface Pad {
  name: string;
  inPlaylist: boolean;
  player: Howl;
}


@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  constructor() { }

  public pads: Pad[] = 
  [
  { 
    name: 'Future funk beats',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/120_future_funk_beats_25.mp3'],
       loop: false,
    })
  },
  {  
    name: 'Stutter breakbeats',
    inPlaylist: false,
    player: new Howl({
    src:['./assets/mp3/120_stutter_breakbeats_16.mp3'],
     loop: false,
  })
  
  },
  {
     name: 'Funk groove',
  inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/Bass Warwick heavy funk groove on E 120 BPM.mp3'],
       loop: false,
    })
  },
  { 
    name: 'Electric guitar',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/electric guitar coutry slide 120bpm - B.mp3'],
       loop: false,
    })
  },
  { 
    name: 'Darbuka',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/GrooveB_120bpm_Tanggu.mp3'],
       loop: false,
    })
  },
  { 
    name: 'Groove',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/PAS3GROOVE1.03B.mp3'],
       loop: false,
    })
  },
  {
     name: 'Techno',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/MazePolitics_120_Perc.mp3'],
       loop: false,
    })
  },
  {
    name: 'Drums',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/FUD_120_StompySlosh.mp3'],
       loop: false,
    })
  },
  {
    name: 'Organ Synth',
    inPlaylist: false,
    player: new Howl({
      src:['./assets/mp3/SilentStar_120_Em_OrganSynth.mp3'],
       loop: false,
    })
  }
  ];
}
