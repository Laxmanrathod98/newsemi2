import { Author } from "./../../book-store-models/Author.model";
import { SetAuthor } from "./../../store/actions/author.action";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

@Component({
    selector: "app-author-tile",
    templateUrl: "./author-tile.component.html",
    styleUrls: ["./author-tile.component.scss"],
})
export class AuthorTileComponent {
    @Input() author;
    constructor(private router: Router, private store: Store) {}

    /**
     * Dispatch Action and Redirect to booklisting Page
     * @param payload selected Author
     */
    goToBookListingPage(payload: Author) {
        this.store.dispatch(new SetAuthor(payload));
        this.router.navigate([`author/${payload.authorId}/book-list`]);
    }
}
