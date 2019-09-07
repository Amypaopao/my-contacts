// 导入Input
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  // 外部导入的数据
  @Input() title: string
  @Input() isShowCreateButton: boolean

  constructor() {}

  ngOnInit() {}
}
