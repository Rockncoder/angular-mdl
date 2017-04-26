import {Component, OnInit} from '@angular/core';
import {MemberService} from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works!';

  constructor(private gitHub: MemberService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.callService(null);
  }

  private callService(url: string) {
    this.gitHub.get(url).subscribe(
      data => {
      },
      error => {
      });
  }
}
