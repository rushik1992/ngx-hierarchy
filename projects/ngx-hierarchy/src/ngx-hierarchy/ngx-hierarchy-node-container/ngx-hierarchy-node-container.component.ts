import { Component,EventEmitter, HostBinding, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { INode } from "../INode";


@Component({
  selector: 'ngx-hierarchy-node-container',
  templateUrl: './ngx-hierarchy-node-container.component.html',
  styleUrls: ['./ngx-hierarchy-node-container.component.scss'],
  standalone:false
})
export class NgxHierarchyNodeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: INode;

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @HostBinding('style.flex-direction')
  get hostClass() {
    return this.direction === 'vertical' ? 'column' : '';
  }

}
