import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private itemArr = ["Groceries", "Study", "World Domination"]
  private _item: BehaviorSubject<string[]> = new BehaviorSubject(this.itemArr);
  items$ = this._item as Subject<string[]>
  
  constructor() {}
   
  addItem(item:string){
    this.itemArr.push(item)
    this._item.next(this.itemArr)
  }

  removeItem(index:number){
    this.itemArr.splice(index,1)
    this._item.next(this.itemArr)
  }

}
