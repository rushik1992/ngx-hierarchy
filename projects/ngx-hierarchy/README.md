# NgxHierarchy

`ngx-hierarchy` is an Angular Component Module for Vertical or Horizontal Hierarchy/Tree View. It can be used to show parent child view, Organization structure, Tree view. with your flaxible dynamic template design with controls.

## Installation

```sh
$ npm install ngx-hierarchy
```
## Vertical View

![NgxHierarchy Vertical View](https://raw.githubusercontent.com/rushik1992/ngx-hierarchy/master/projects/ngx-hierarchy/VerticalView.png)

## Horizontal View

![NgxHierarchy Horizontal View](https://raw.githubusercontent.com/rushik1992/ngx-hierarchy/master/projects/ngx-hierarchy/HorizontalView.png)


## Demo Link
[Click Here](https://rushik1992.github.io/ngx-hierarchy/)

## Component Inputs

|Name|Type|Description
|---|---|---|
|`nodes`|`INode` object|The `INode` object that contains node info mentioned below
|`direction`|`vertical` or `horizontal`| Direction of the chart top to bottom or left to right
|`template`|`TemplateRef<any>`| Angular Template to render in each node

## INode Details

|Property|Type|Description
|---|---|---
|cssClass|`string`|Custom css class to override or change node style
|childs|`INode[]`|The array of child nodes
|{otherCustomeProperty}|`any or function`|You can add any other Property or Function in each node and can use in template


### import Module in `app.module.ts`


```ts
import { NgxHierarchyModule } from 'ngx-hierarchy';
```
```ts
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxHierarchyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### `app.component.ts`

```ts
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

```

### `app.component.html`

```html
<ngx-hierarchy [nodes]="nodes" direction="vertical" [template]="nodeTemplate">
  <ng-template #nodeTemplate let-node>
    <div class="node-template">
      <strong>{{node.position}} </strong>
      <span>{{node.name}} </span>
      <button (click)="node.onOk(node)">ok</button>
    </div>
  </ng-template>
</ngx-hierarchy>
```

## Checkout hierarchy view in React also.
[Click Here](https://www.npmjs.com/package/react-hierarchy-chart)