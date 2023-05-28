import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gif: Gif = {} as Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif is required');
  }
}
