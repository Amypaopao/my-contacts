import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CollectionComponent } from './collection/collection.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { EditComponent } from './edit/edit.component'

// 导入路由模块（路由器，路由规则）
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './share/header/header.component'
import { FooterComponent } from './share/footer/footer.component'
import { HttpClientModule } from '@angular/common/http'
import { ContactService } from './contact.service'

// 配置路由规则
const appRoutes: Routes = [
  // 配置默认路径
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/:id',
    component: DetailComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // 引入数据模块
    HttpClientModule,
    // 配置路由器
    RouterModule.forRoot(appRoutes)
  ],
  //  注入数据
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
