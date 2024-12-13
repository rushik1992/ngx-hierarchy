import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { INode } from "../INode";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-hierarchy',
  standalone: false,
  templateUrl: './ngx-hierarchy.component.html',
  styleUrls: ['./ngx-hierarchy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxHierarchyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  template!: TemplateRef<any>;

  @Input()
  nodes!: INode[];

  @Input()
  hasParent = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

}
