import { Component, OnInit } from '@angular/core';
import { myservice } from '../services/myservice';
import { NewserviceService } from '../services/newservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  product: string | undefined;

   constructor(private _myservice:NewserviceService) { }
  //constructor() { }

  ngOnInit(): void {
    this.product= 'Component2';
  }
  hello(){
    this._myservice.hi();
  }

/*     hello(){
      const obj = new myservice();
      obj.messageAlert();
    }  */
   
  
  
/*     hello(){
      alert('button clicked');
    } */
}
