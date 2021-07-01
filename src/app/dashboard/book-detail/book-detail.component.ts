import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { Book } from "src/app/common-utilities/book-store-models/Book.model";
import { ErrorMessages } from "src/app/common-utilities/constants/errors.enum";
import { BookStoreCommonService } from "src/app/common-utilities/services/book-store-common.service";

@Component({
    selector: "app-book-detail",
    templateUrl: "./book-detail.component.html",
    styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent implements OnInit, OnDestroy {
    bookId: number;
    book: Book = new Book();
    subscriptions: Subscription[] = [];
    error: string;

    constructor(private service: BookStoreCommonService, private route: ActivatedRoute) {}

    /**
     * on init
     */
    ngOnInit(): void {
        this.subscriptions.push(
            this.route.params.subscribe((params: Params) => {
                this.bookId = +params["bookId"];
            })
        );
        this.getBookById(this.bookId);
    }

    /**
     * Gets book by id
     * @param id
     */
    getBookById(id: number) {
        this.subscriptions.push(
            this.service.getBookById(id).subscribe(
                (data: Book) => {
                    this.book = data;
                },
                (error) => (this.error = ErrorMessages.ERROR_MESSAGE)
            )
        );
    }

    /**
     * on destroy
     */
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
