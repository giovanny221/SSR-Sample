import {AsyncPipe, isPlatformBrowser, isPlatformServer} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {afterNextRender, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';
import {map, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    TranslocoPipe,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly #http = inject(HttpClient);
  translocoService = inject(TranslocoService);

  TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

  todos$ = this.#http.get<{title: string}[]>(this.TODO_URL)
    .pipe(tap(result => {
      console.log('Loaded from the template, all TODOS: ', result);
    }));

  todoElement = this.#http.get<{title: string}>(this.TODO_URL + '/1')
    .pipe(
      map(response => response.title),
    );

  constructor() {
    this.#http.get<{title: string}>(this.TODO_URL + '/1')
      .subscribe(result => {
        console.log('Loaded from constructor, todo 1: ', result)
      });
    const platform = inject(PLATFORM_ID);
    if (isPlatformBrowser(platform)) {
      console.log('Executed in Client Side');
      afterNextRender(() => {
        console.log(localStorage.getItem('test'));
      });
    }
    if (isPlatformServer(platform)) {
      console.log('Executed in Server Side');
    }
  }

  getTodo(position: string) {
    this.todoElement = this.#http.get<{title: string}>(this.TODO_URL + '/' + position)
      .pipe(
        map(response => response.title),
      );
    console.log('Loaded from button, TODO:', position);
  }

  public changeLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }
}
