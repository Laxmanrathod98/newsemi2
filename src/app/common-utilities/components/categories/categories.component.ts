import { Component, OnInit } from "@angular/core";
import { BookStoreCommonService } from "../../services/book-store-common.service";
import { Subscription } from "rxjs";
import { ErrorMessages } from "../../constants/errors.enum";
import { Category } from "./../../book-store-models/Category.model";
import { featuredCategories } from "../../constants/featured-categories.constants";
@Component({
    selector: "app-categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
    constructor(private commonService: BookStoreCommonService) {}
    //category: Category;
    category: Object[] = [];
    subscription: Subscription = new Subscription();
    error: string;

    /**
     * on init
     */
    ngOnInit(): void {
        this.getCategoryData();
    }

    /**
     * Gets category data
     */
    getCategoryData(): void {
        this.category = featuredCategories;
    }
}
