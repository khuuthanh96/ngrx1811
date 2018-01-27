import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count: Observable<number>;

  constructor(private store: Store<any>) {
    this.count = this.store.pipe(select('count'));
  }

  increase() { this.store.dispatch({ type: 'INCREASE' }); }
  descrease() { this.store.dispatch({ type: 'DESCREASE' }); }
  reset() { this.store.dispatch({ type: 'RESET' }); }
}
