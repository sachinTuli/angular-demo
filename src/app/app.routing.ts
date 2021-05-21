import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "chat",
    pathMatch: "full",
  },
  {
    path: "chat",
    loadChildren: () =>
      import("./modules/chat/chat.module").then((m) => m.ChatModule),
  }
];
 
@NgModule({
  imports: [
       RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
  ],
  exports: [],
  providers: [],
})
export class AppRoutingModule {}
