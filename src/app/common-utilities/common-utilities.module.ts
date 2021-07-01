import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { WelcomeDummyComponent } from "./components/welcome-dummy/welcome-dummy.component";
import { CartComponent } from "./components/cart/cart.component";
import { CategorySelectorComponent } from "./components/category-selector/category-selector.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/header/header.component";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, TopBarComponent, WelcomeDummyComponent, CategorySelectorComponent, BookCardComponent, CartComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        HttpClientModule,
        MatCardModule,
        FlexLayoutModule,
        FormsModule,
        MatGridListModule,
        MatPaginatorModule,
        MatBadgeModule,
    ],
    exports: [HeaderComponent, FooterComponent, TopBarComponent, WelcomeDummyComponent, CategorySelectorComponent, BookCardComponent, CartComponent],
})
export class CommonUtilitiesModule {}
