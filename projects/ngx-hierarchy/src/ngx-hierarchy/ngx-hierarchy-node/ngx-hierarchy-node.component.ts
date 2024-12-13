import { Component, EventEmitter,Input, OnInit, Output, TemplateRef } from '@angular/core';
import { INode } from "../INode";


@Component({
  selector: 'ngx-hierarchy-node',
  templateUrl: './ngx-hierarchy-node.component.html',
  styleUrls: ['./ngx-hierarchy-node.component.scss'],
  standalone:false
})
export class NgxHierarchyNodeComponent implements OnInit {
  
  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: INode;

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  constructor() { }

  ngOnInit() {
  }

  
}
