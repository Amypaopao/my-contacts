import { Injectable } from '@angular/core'
// 导入http模块
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // 通过http的get方法，获取本地的json数据
  contactsUrl = '../assets/contacts.json'
  getContacts() {
    return this.http.get(this.contactsUrl)
  }
}
