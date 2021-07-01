import { constHeader } from "./../../constants/header.constants";
import { Component, Input, OnInit } from "@angular/core";
import { Header } from "../../book-store-models/Header.model";

@Component({
    selector: "app-category-selector",
    templateUrl: "./category-selector.component.html",
    styleUrls: ["./category-selector.component.scss"],
})
export class CategorySelectorComponent implements OnInit {
    @Input() sidenav;
    header: Header = new Header();

    constructor() {}

    /**
     * on init
     */
    ngOnInit(): void {
        this.getHeaderData();
    }

    /**
     * Gets header data
     */
    getHeaderData(): void {
        this.header = constHeader;
    }
}
