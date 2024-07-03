import { Component, OnInit } from '@angular/core';
import { myservice } from '../services/myservice';
import { NewserviceService } from '../services/newservice.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  product: string | undefined;

  constructor(private _myservice:NewserviceService) { }

  //constructor() { }

  ngOnInit(): void {
    this.product= 'Component1';
    /* console.log('this is herew'+this._myservice.product);
    this.product= this._myservice.product; */



  } 

  hello(){
    this._myservice.hi();
  } 

/*    hello(){
    const obj = new myservice();
    obj.messageAlert();
  }  */
 


/*   hello(){
    alert('button clicked');
  } */

  

}
