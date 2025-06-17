import {HttpClient} from '@angular/common/http';
import {Component, inject} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'csr-project';

  readonly #http = inject(HttpClient);
  data: {data1: string; data2: string;} | undefined;

  redirectToSSR() {
    this.data = {
      'data1': 'data 1',
      'data2': 'data 2',
    };

    this.#http.post('/redirectToSSR', this.data);
  }

}
