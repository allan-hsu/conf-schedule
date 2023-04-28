import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('/events.json');
    let data = await response.json();
    return data;
  }
}
