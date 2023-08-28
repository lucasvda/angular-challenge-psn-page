import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tag',
  templateUrl: './card-tag.component.html',
  styleUrls: ['./card-tag.component.css']
})
export class CardTagComponent {
@Input()
tag:string = ""
}
