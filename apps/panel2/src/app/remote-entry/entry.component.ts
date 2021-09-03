import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { TestService } from "@kict/mfe-shared";

@Component({
    selector: 'federation-panel2-entry',
    template: `<div class="remote-entry">
        <h2>panel2's Remote Entry Component</h2>
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
export class RemoteEntryComponent {

  @Input() public incoming$!: Observable<any>;

  constructor(private shared: TestService) {
      console.log(shared.getValue());
  }

}
