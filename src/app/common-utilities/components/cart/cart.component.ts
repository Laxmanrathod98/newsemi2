import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Cart } from "../../book-store-models/Cart.model";
import { BookStoreCommonService } from "../../services/book-store-common.service";
import { ErrorMessages } from "../../constants/errors.enum";
import { Select, Store } from "@ngxs/store";
import { UserState } from "../../store/states/user.state";
import { SetCartCount } from "../../store/actions/cart.action";
import { CartState } from "../../store/states/cart.state";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, OnDestroy {
    @Input() cart;
    cartItems: Cart[] = [];
    subscription: Subscription[] = [];
    itemsCount: number = 0;
    total: number = 0;
    error: String;
    @Select(UserState.getUserId) userId: Observable<number>;
    @Select(CartState.getCartCount) count: Observable<number>;
    user: number;

    constructor(private commonService: BookStoreCommonService, private store: Store) {}

    /**
     * gets cart items after user logins and after cartItem count changes
     */
    ngOnInit(): void {
        this.userId.subscribe((user) => {
            this.user = user;
            if (user !== 0) {
                this.getCartItems(this.user);
            }
        });
        this.count.subscribe((cartCount) => {
            if (this.user !== 0) {
                this.getCartItems(this.user);
            }
        });
    }

    /**
     * Gets cart items
     * @param id
     */
    getCartItems(id: number): void {
        this.total = 0;
        this.subscription.push(
            this.commonService.getCartItems(id).subscribe(
                (data) => {
                    this.cartItems = data;
                    this.itemsCount = this.cartItems.length;
                    this.total = data.map((cart) => cart.price * cart.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
                },
                (error) => (this.error = ErrorMessages.ERROR_MESSAGE)
            )
        );
    }

    /**
     * Deletes cart item
     * @param id
     */
    deleteCartItem(cartId: number) {
        this.subscription.push(
            this.commonService.deleteCartItem(this.user, cartId).subscribe(
                (data) => {
                    this.itemsCount -= 1;
                    this.store.dispatch(new SetCartCount(this.itemsCount));
                },
                (error) => (this.error = ErrorMessages.ERROR_MESSAGE)
            )
        );
    }

    /**
     * unsubscribes all the api calls subscribed on destroy
     */
    ngOnDestroy(): void {
        this.subscription.forEach((s) => s.unsubscribe());
    }
}
