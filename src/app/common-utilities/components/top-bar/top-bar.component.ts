import { OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Component, Input } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { BookStoreCommonService } from "../../services/book-store-common.service";
import { SetCartCount } from "../../store/actions/cart.action";
import { CartState } from "../../store/states/cart.state";
import { UserState } from "../../store/states/user.state";

@Component({
    selector: "app-top-bar",
    templateUrl: "./top-bar.component.html",
    styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit, OnDestroy {
    @Input() cart;
    cartItemsCount: number = 0;
    subscription: Subscription = new Subscription();
    @Select(UserState.getUserId) userId: Observable<number>;
    @Select(CartState.getCartCount) cartCount: Observable<number>;
    user: number;

    constructor(private commonService: BookStoreCommonService, private store: Store) {}

    /**
     * gets cart items and count of cartItems after user logins
     */
    ngOnInit(): void {
        this.userId.subscribe((user) => {
            this.user = user;
            if (user !== 0) {
                this.getCartItems();
            }
        });
        this.cartCount.subscribe((count) => (this.cartItemsCount = count));
    }

    /**
     * Gets cart items
     */
    getCartItems() {
        this.subscription = this.commonService.getCartItems(this.user).subscribe((data) => {
            this.cartItemsCount = data.length;
            this.store.dispatch(new SetCartCount(this.cartItemsCount));
        });
    }

    /**
     * unsubscribes all the api calls subscribed on destroy
     */
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
