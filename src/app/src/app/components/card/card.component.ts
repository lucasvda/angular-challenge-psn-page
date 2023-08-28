import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  imgPath:string = ""
  @Input()
  textTag:string = ""
  @Input()
  textMktMessage:string = ""
  @Input()
  textTypeAndHardware:string = ""
  @Input()
  textValue:string = ""

}
