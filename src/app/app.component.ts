import { Component } from '@angular/core';
import { Observable, Observer, of, from, fromEvent, timer, interval, range, empty, throwError, combineLatest, zip, forkJoin } from 'rxjs';
import { filter, take, concat, merge } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx';

  constructor() {
    this.fourthLesson();
  }

  firstLesson() {
    const o = Observable.create((observer: Observer<string>) => {
      observer.next('Hello');
      observer.complete();
    });

    o.subscribe({
      next: (value: string) => console.log('Next:', value),
      complete: () => console.log("Complete!"),
      error: (error) => console.log('Error', error)
    });
  }

  secondLesson() {
    //const o = of(5, 6, 100, 7);
    //const o = from([5, 6, 100, 7]);
    //const o = fromEvent(document.body, "mousemove");
    //const o = timer(0, 500);
    //const o = interval(500);
    //const o = range(0, 100);
    //const o = empty();
    const o = throwError("Err");
    o.subscribe({
      next: (value: any) => console.log('Next:', value),
      complete: () => console.log("Complete!"),
      error: (error) => console.log('Error', error)
    });
  }

  thirdLesson() {
    const o = range(0, 100).pipe(filter(number => number > 50));
    
    o.subscribe({
      next: (value: any) => console.log('Next:', value),
      complete: () => console.log("Complete!"),
      error: (error) => console.log('Error', error)
    });
  }

  fourthLesson() {
    const o1 = timer(0, 1000).pipe(take(3));
    const o2 = timer(0, 100).pipe(take(3));

    //const o = combineLatest(o1, o2);
    //const o = zip(o1, o2);
    //const o = forkJoin(o1, o2);
    //const o = o1.pipe(concat(o2));
    const o = o1.pipe(merge(o2));

    o.subscribe({
      next: (value: any) => console.log('Next:', value),
      complete: () => console.log("Complete!"),
      error: (error) => console.log('Error', error)
    });
  }
}
