import { Component, Input } from "@angular/core";

@Component({
    selector: "app-book-publisher-detail",
    templateUrl: "./book-publisher-detail.component.html",
    styleUrls: ["./book-publisher-detail.component.scss"],
})
export class BookPublisherDetailComponent {
    @Input() format: string;
    @Input() publisher: string;
    @Input() publishDate: Date;
    @Input() pages: number;
    @Input() dimension: string;
    @Input() imprint: string;
    @Input() language: string;
    @Input() publisherLocation: string;
    constructor() {}
}
