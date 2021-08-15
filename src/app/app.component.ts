import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  opened=false
 showSpiner=false;
 loadData(){
   this.showSpiner=true;
   setTimeout(()=>{
     this.showSpiner=false
   },5000);
 }

}
