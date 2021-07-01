import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Author } from "src/app/common-utilities/book-store-models/Author.model";
import { Book } from "src/app/common-utilities/book-store-models/Book.model";
import { BookStoreCommonService } from "src/app/common-utilities/services/book-store-common.service";
import { AuthorState } from "src/app/common-utilities/store/states/author.state";
import { ErrorMessages } from "../../common-utilities/constants/errors.enum";
@Component({
    selector: "app-book-list",
    templateUrl: "./book-list.component.html",
    styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit, OnDestroy {
    authorId: Number = -1;
    pageSize = 12;
    error: String;
    buttons: number[] = [];
    books: Book[] = [];
    lowValue = 0;
    highValue = 12;
    subscription: Subscription[] = [];
    @Select(AuthorState.getAuthor) Author: Observable<Author>;

    constructor(private service: BookStoreCommonService, private router: Router) {}

    /**
     * on init
     */
    ngOnInit(): void {
        this.getAuthor();
        this.getBooks();
    }

    /**
     * retutn list of all books for paricular author
     */
    public getBooks(): void {
        this.subscription.push(
            this.service.getAllBooksByAuthorId(this.authorId).subscribe(
                (data) => {
                    this.books = data;
                    if (this.books.length !== 0) this.getButtons(this.books.length);
                },
                (err) => {
                    this.error = ErrorMessages.ERROR_MESSAGE;
                }
            )
        );
    }

    /**
     * Gets author from ngxs store
     *
     */
    public getAuthor() {
        this.subscription.push(
            this.Author.subscribe(
                (data) => {
                    if (data !== null) this.authorId = data.authorId;
                    else this.router.navigate(["/dashboard"]);
                },
                (err) => {
                    this.error = ErrorMessages.ERROR_MESSAGE;
                }
            )
        );
    }

    /**
     * Gets page buttons according to the number of books
     * @param length
     */
    public getButtons(length: number) {
        let n = length / 12;
        n = Math.floor(n);
        let i = 1;
        if (length % 12 !== 0) n++;
        while (n > 0) {
            this.buttons.push(i);
            i++;
            n--;
        }
        if (length <= 12) this.highValue = length;
    }

    /**
     * Changes page whenever page buttons are clicked
     * @param ind
     * @param num
     */
    public changePage(ind: number, num: number): void {
        if (num === -1) {
            this.highValue = this.lowValue;
            this.lowValue = this.lowValue - 12;
        } else {
            this.highValue = 12 * num + this.highValue * ind;
            this.lowValue = this.highValue - 12;
        }
        if (this.highValue > this.books.length) this.highValue = this.books.length;
    }

    /**
     * on destroy
     */
    ngOnDestroy(): void {
        this.subscription.forEach((s) => s.unsubscribe());
    }
}
