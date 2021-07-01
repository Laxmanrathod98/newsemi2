import { constFooter } from "./../../constants/footer.constants";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
    footerData: string = "";

    constructor() {}

    /**
     * on init
     */
    ngOnInit(): void {
        this.getFooterData();
    }

    /**
     * Gets footer data
     */
    getFooterData() {
        this.footerData = constFooter.footerData;
    }
}
