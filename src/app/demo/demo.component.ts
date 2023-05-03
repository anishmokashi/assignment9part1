import { Component,OnInit  } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
addsum :any;
subsum:any;
constructor(private _arithmetic:ArithmeticService)
{}
ngOnInit() 
  {
    this.addsum=this._arithmetic.Add(10,20);
    this.subsum=this._arithmetic.SUB(20,10);
  }

}
