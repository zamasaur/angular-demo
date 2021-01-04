import { Component } from '@angular/core';
import { LikeChangedEventArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';

  like = {
    likesCount: 10,
    isActive: true
  }

  onLikeChanged(eventArgs: LikeChangedEventArgs){
    console.log("Like changed", eventArgs);
  }
}
