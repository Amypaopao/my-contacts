import { Component, OnInit } from '@angular/core'
// 引入服务数据
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  // 定义一个全局属性，用于存储JSON列表
  contacts: {}
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts()
  }

  // 获取数据
  getContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data
    })
  }
}
