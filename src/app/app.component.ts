import { Component } from '@angular/core';
import { INode } from 'ngx-hierarchy';


interface custNode extends INode{
  name:string;
  position:string;
  childs?:custNode[];
  onOk:Function;
}
@Component({
  selector: 'app-root',
  standalone: false,  // Add this line
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngx-hierarchy-demo';
  nodes: custNode[] = [
    {
      name: 'Caleb Matthews',
      cssClass: 'level1',
      position: 'Chief Executive Officer',
      childs: [
        {
          name: 'Antonia Sancho',
          cssClass: 'level2',
          position: 'HR Manager',
          onOk: this.onOk
        },
        {
          name: 'Thoms Hilty',
          cssClass: 'level2',
          position: 'Marketing Manager',
          childs: [
            {
              name: 'Eyal Matthews',
              cssClass: 'level3',
              position: 'Social Media',
              onOk: this.onOk
            },
            {
              name: 'Adam Mark',
              cssClass: 'level3',
              position: 'Offline Marketing',
              onOk: this.onOk
            }
          ],
          onOk: this.onOk
        },
        {
          name: 'Barry Roy',
          cssClass: 'level2',
          position: 'Production Manager',
          childs: [
            {
              name: 'Ligia Opera',
              cssClass: 'level3',
              position: 'Supply Chain',
              onOk: this.onOk
            },
            {
              name: 'Moran Perry',
              cssClass: 'level3',
              position: 'Operational Manager',
              onOk: this.onOk
            }
          ],
          onOk: this.onOk
        }
      ],
      onOk: this.onOk
    }
  ];
  constructor(){
  }

  onOk(node:custNode){
    alert(node.name);
  }

}