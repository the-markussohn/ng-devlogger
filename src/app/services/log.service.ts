import {Injectable} from '@angular/core';
import {Log} from '../models/log';

@Injectable()
export class LogService {

  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017')},
      {id: '2', text: 'Generated c', date: new Date('12/28/2017')},
      {id: '3', text: 'Gen', date: new Date('01/01/2018')}
    ];
  }

  getLogs(): Log[] {
    return this.logs;
  }
}
