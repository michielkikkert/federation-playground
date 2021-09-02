import { Component } from '@angular/core';
import { TestService } from "@kict/mf/mfe-shared";
import { Observable } from "rxjs";

@Component({
  selector: 'federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'panel1';

  public data$: Observable<any> = this.shared.data$;

  constructor(private shared: TestService) {

  }
}
