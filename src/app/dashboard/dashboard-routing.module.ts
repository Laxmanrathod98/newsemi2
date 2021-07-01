import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookListComponent } from "./book-list/book-list.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "author/:id/book-list/:bookId", component: BookDetailComponent },
    { path: "author/:id/book-list", component: BookListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
