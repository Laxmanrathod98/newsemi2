import { Component, Input, OnDestroy, OnInit, OnChanges } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { BookFormat } from "src/app/common-utilities/book-store-models/Book-Format.model";
import { BookFormatDetails } from "src/app/common-utilities/constants/book-format.constants";
import { ErrorMessages } from "src/app/common-utilities/constants/errors.enum";
import { BookStoreCommonService } from "src/app/common-utilities/services/book-store-common.service";
import { SetCartCount } from "src/app/common-utilities/store/actions/cart.action";
import { CartState } from "src/app/common-utilities/store/states/cart.state";
import { UserState } from "src/app/common-utilities/store/states/user.state";

@Component({
    selector: "app-book-info",
    templateUrl: "./book-info.component.html",
    styleUrls: ["./book-info.component.scss"],
})
export class BookInfoComponent implements OnInit, OnChanges, OnDestroy {
    @Input() bookTitle: string;
    @Input() price: number;
    @Input() bookId: number;
    @Input() rating: number;
    @Input() author: string;
    @Input() avgRating: number;
    @Select(UserState.getUserId) userId: Observable<number>;
    user: number;
    @Select(CartState.getCartCount) cartCount: Observable<number>;
    cartItemsCount: number;
    @Input() format: string;

    activeStars: number[];
    inactiveStars: number[];
    itemTotal = 1;
    bookFormat: BookFormat[] = [];
    subscription: Subscription[] = [];
    error: string;

    constructor(private service: BookStoreCommonService, private store: Store, private snackBar: MatSnackBar) {}
    ngOnInit(): void {
        this.bookFormat = BookFormatDetails;
        this.userId.subscribe((u) => (this.user = u));
        this.cartCount.subscribe((count) => (this.cartItemsCount = count));
    }

    ngOnChanges(): void {
        this.activeStars = Array(this.avgRating)
            .fill(0)
            .map((x, i) => i);
        if (this.avgRating < 5) {
            this.inactiveStars = Array(5 - this.avgRating)
                .fill(0)
                .map((x, i) => i);
        }
    }

    /**
     * Increases item
     */
    increaseItem() {
        this.itemTotal = this.itemTotal + 1;
    }

    /**
     * Decreases item
     */
    decreaseItem() {
        this.itemTotal = this.itemTotal - 1;
    }

    /**
     * Determines whether more than zero is
     * @returns true if more than zero
     */
    isMoreThanZero(): boolean {
        return this.itemTotal > 0;
    }

    /**
     * Adds cart item
     */
    addCartItem() {
        this.cartItemsCount += 1;
        this.subscription.push(
            this.service.addCartItem(this.user, this.bookId, this.itemTotal).subscribe(
                (data) => {
                    this.store.dispatch(new SetCartCount(this.cartItemsCount));
                },
                (error) => (this.error = ErrorMessages.ERROR_MESSAGE)
            )
        );
        this.snackBar.open("Item added to Cart", "ok", {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: "success",
        });
    }

    /**
     * on destroy
     */
    ngOnDestroy(): void {
        this.subscription.forEach((s) => s.unsubscribe());
    }
}
