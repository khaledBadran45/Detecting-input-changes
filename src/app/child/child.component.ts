import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // if you want to test the code open the console and please comment the way u don't test beacouse becouse it's never works in the same time becous we binding on the same property
  constructor() {}
  ngOnInit(): void {}
  //here is input setter way 
  //this way is useful when we need the current value any way without carring about the prevous value or another @input()value
  _categoryId: Number = 0;
  @Input() set categoryId(value: any) {
    this._categoryId = value;
    console.log(this._categoryId, `setter`);
    this.doSomething(this._categoryId)
  }
  get categoryId():any {
    return this._categoryId;

}

//here is ngOnChanges way 
//this way id useful when we need to comparing our previous value and our current value  and when we but abounch of @Input() all changes is coming here
  // @Input() categoryId!: Number;
  // // Now we want to detect our changes
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.categoryId)
  //   this.doSomething(changes.categoryId)
  // }

  doSomething(id: any) {
    console.log(
      `fetch my data using id:  ${id.currentValue}`,
      `the previous value is: ${id.previousValue}`,
      ` now we can compareing our data using ng on changes`
    );
  }
}
