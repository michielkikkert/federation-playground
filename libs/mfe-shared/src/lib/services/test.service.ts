import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TestService {
    private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public data$ = this.data.asObservable();

    constructor() {
      console.log('TestService construct');
    }

    public setData(data: any): void {
        this.data.next(data);
    }

    public getValue(): any {
        return this.data.getValue();
    }
}
