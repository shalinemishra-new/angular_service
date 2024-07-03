import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: null
})
export class NewserviceService implements OnInit{

  product: string = 'test';

  ngOnInit(): void {
   

  }
  hi() {
    alert('inside injected service');
  }

  constructor() { }


}
