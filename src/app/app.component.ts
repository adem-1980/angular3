import { Component } from '@angular/core';
import { Model,TodoItem } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  model1=new Model();   

  getUser(){

    return this.model1.user;
  }

  getItems(){

    return this.model1.items2.filter(x=>x.action==false);
  }

  addItem(value:string){

    if(value!=null)
    {
      this.model1.items2.push(new TodoItem(value,false));
    }


  }

}
