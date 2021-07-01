import { Component, Input } from "@angular/core";

@Component({
    selector: "app-book-description",
    templateUrl: "./book-description.component.html",
    styleUrls: ["./book-description.component.scss"],
})
export class BookDescriptionComponent {
    @Input() overview: string;
    @Input() synopsis: string;

    constructor() {}
}
