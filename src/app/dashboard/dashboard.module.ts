import { AuthorState } from "./../common-utilities/store/states/author.state";
import { CategoriesComponent } from "./../common-utilities/components/categories/categories.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { BookListComponent } from "./book-list/book-list.component";
import { CommonUtilitiesModule } from "../common-utilities/common-utilities.module";
import { AuthorsListComponent } from "../common-utilities/components/authors-list/authors-list.component";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { BookDescriptionComponent } from "./book-detail/book-description/book-description.component";
import { BookPublisherDetailComponent } from "./book-detail/book-publisher-detail/book-publisher-detail.component";
import { BookInfoComponent } from "./book-detail/book-info/book-info.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AuthorTileComponent } from "../common-utilities/components/author-tile/author-tile.component";
import { CategoryTilesComponent } from "../common-utilities/components/category-tiles/category-tiles.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        DashboardComponent,
        AuthorsListComponent,
        AuthorTileComponent,
        BookDetailComponent,
        BookDescriptionComponent,
        BookPublisherDetailComponent,
        BookInfoComponent,
        BookListComponent,
        CategoriesComponent,
        CategoryTilesComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CommonUtilitiesModule,
        MatGridListModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatTableModule,
        HttpClientModule,
        MatToolbarModule,
        MatListModule,
        FlexLayoutModule,
        FormsModule,
        MatCardModule,
        MatPaginatorModule,
        MatSidenavModule,
        CommonUtilitiesModule,
        MatSnackBarModule,
    ],
    exports: [BookListComponent],
})
export class DashboardModule {}
