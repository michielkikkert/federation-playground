import { Component } from '@angular/core';
import { TestService } from "@kict/mfe-shared";

@Component({
  selector: 'federation-panel2-entry',
  template: `<div class="remote-entry">
    <h2>panel1-2's Remote Entry Component</h2>
    <div>Data: {{data | async }}</div>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent2 {

  public data:any = this.shared.data$;

  constructor(private shared: TestService) {}

}
