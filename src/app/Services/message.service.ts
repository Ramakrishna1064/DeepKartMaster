import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable()
export class MessageService {

  private listners$ = new Subject<any>();
  public listen = this.listners$.asObservable();
  setFilter(data: string){
    this.listners$.next(data);
  }
}
