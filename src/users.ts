import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
  public heading = 'Github Users';
  public users = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        // .withBaseUrl('https://jsonplaceholder.typicode.com/');
        .withBaseUrl('http://30823187.ngrok.io/api/');
    });
  }

  public activate() {
    return this.http.fetch('employee' )
      .then(response => response.json())
      .then(users => this.users = users as any);
  }
}
