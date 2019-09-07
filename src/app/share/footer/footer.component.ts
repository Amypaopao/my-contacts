import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  // isListPage用于判断当前路径是否为/list，是则添加onclick属性，不是则不添加onClick属性
  private isListPage: boolean = true
  constructor(private _location: Location) {}

  ngOnInit() {
    // isListPage用于判断当前路径是否为/list，是则添加onclick属性，不是则不添加onClick属性
    this.isListPage =
      this._location.path() == '' || this._location.path().indexOf('/list') > -1
  }
}
