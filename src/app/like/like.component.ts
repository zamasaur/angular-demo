import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('likeChange') likeChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    this.likeChange.emit({likesCount: this.likesCount, isActive: this.isActive});
  }
}

export interface LikeChangedEventArgs {
  likesCount: number,
  isActive: boolean
}
