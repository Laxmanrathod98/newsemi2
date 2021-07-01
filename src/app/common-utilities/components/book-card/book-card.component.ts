import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select } from "@ngxs/store";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { Author } from "../../book-store-models/Author.model";
import { Book } from "../../book-store-models/Book.model";
import { AuthorState } from "../../store/states/author.state";
import { ErrorMessages } from "../../constants/errors.enum";

@Component({
    selector: "app-book-card",
    templateUrl: "./book-card.component.html",
    styleUrls: ["./book-card.component.scss"],
})
export class BookCardComponent implements OnInit {
    AuthorData: Author;
    error: String;
    subscription: Subscription = new Subscription();
    @Input() book: Book;
    @Select(AuthorState.getAuthor) Author: Observable<Author>;

    constructor(private router: Router) {}

    /**
     * on init
     */

    ngOnInit(): void {
        this.subscription = this.Author.subscribe(
            (data) => {
                this.AuthorData = data;
            },
            (err) => {
                this.error = ErrorMessages.ERROR_MESSAGE;
            }
        );
    }

    /**
     * Determines which book has been selected
     */
    onBookSelection() {
        this.router.navigate([`author/${this.AuthorData.authorId}/book-list/${this.book.bookId}`]);
    }

    /**
     * on destroy
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
