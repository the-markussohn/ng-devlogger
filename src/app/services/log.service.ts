import {Injectable} from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';

import {Log} from '../models/log';

@Injectable()
export class LogService {

  private _logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  logs: Log[];
  selectedLog$ = this._logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear$ = this.stateSource.asObservable();

  constructor() {
    this.logs = [];
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

  clearState() {
    this.stateSource.next(true);
  }
}
