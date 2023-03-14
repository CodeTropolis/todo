import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private itemArr = ["Groceries", "Study", "World Domination"]
  // Per Debrah Kurata: https://youtu.be/vtCDRiG__D4?t=1291
  // Keep item private - only allow this service to be able to emit into the `item` stream.
  private item: BehaviorSubject<string[]> = new BehaviorSubject(this.itemArr);
  // Expose the read-only observable.
  items$ = this.item as Subject<string[]>
  
  constructor() {}
   
  addItem(item:string){
    this.itemArr.push(item)
    this.item.next(this.itemArr)
  }

  removeItem(index:number){
    this.itemArr.splice(index,1)
    this.item.next(this.itemArr)
  }

}
