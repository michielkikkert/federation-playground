import { Component } from '@angular/core';
import { TestService } from "@kict/mfe-shared";
import { Observable } from "rxjs";
import { startWith } from "rxjs/operators";

@Component({
  selector: 'federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'panel1';

  public data$: Observable<any> = this.shared.data$.pipe(startWith(this.shared.getValue()));

  constructor(private shared: TestService) {

  }
}
