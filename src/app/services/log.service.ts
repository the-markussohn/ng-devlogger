import {Injectable} from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';

import {Log} from '../models/log';

@Injectable()
export class LogService {

  private _logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  logs: Log[];
  selectedLog = this._logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017')},
      {id: '2', text: 'Generated c', date: new Date('12/28/2017')},
      {id: '3', text: 'Gen', date: new Date('01/01/2018')}
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this._logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
