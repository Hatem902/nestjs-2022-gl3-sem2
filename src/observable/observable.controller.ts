import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('observable')
export class ObservableController {
  @Get()
  Observable1(): Observable<number> {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
      (val) => {
        console.log('cc j ai recu la valeur ' + val);
      },
      (erreur) => {
        console.log(erreur);
      },
      () => {
        console.log('end of process');
      },
    );
    return observable;
  }
}
