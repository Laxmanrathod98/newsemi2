import { constHeader } from "./../../constants/header.constants";
import { Component, Input, OnInit } from "@angular/core";
import { Header } from "src/app/common-utilities/book-store-models/Header.model";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
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
