import { Component, Input, OnInit } from "@angular/core";
import { TestService } from "@kict/mfe-shared";
import { Observable } from "rxjs";
import { startWith } from "rxjs/operators";

@Component({
  selector: 'federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'panel1';

  public data$!: Observable<any>;

  @Input() public incoming$!: Observable<any>;

  constructor(private shared: TestService) {

  }

  ngOnInit() {
     console.log('data:', this.shared.getValue());
  }

  getData() {
    console.log('data:', this.shared.getValue());
  }


}
