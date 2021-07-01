import { Component, Input } from "@angular/core";

@Component({
    selector: "app-category-tiles",
    templateUrl: "./category-tiles.component.html",
    styleUrls: ["./category-tiles.component.scss"],
})
export class CategoryTilesComponent {
    @Input() category;
    constructor() {}
}
