import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
public Add(iNO1: any , iNo2 : any)
{ 
  return iNO1+iNo2;
  
}
public SUB(iNO1: any , iNo2 : any)
{ 
  return iNO1-iNo2;
  
}
  constructor() { }
}
