import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { SetCartCount } from "../actions/cart.action";

/**
 * it is used as a data type of state of cartCount.
 */
export class Cart {
    cartCount: number;
}

/**
 * @State decorator to describe metadata for cartCount.
 */
@State<Cart>({
    name: "cartCount",
    defaults: {
        cartCount: 0,
    },
})
@Injectable()
export class CartState {
    constructor() {}

    /**
     * @Selector to return selected cartCount from state
     */
    @Selector()
    static getCartCount(state: Cart) {
        return state.cartCount;
    }
    /**
     * @Action binds SetCartCount and also used to store selected cartCount data into state.
     */
    @Action(SetCartCount)
    setCartCount({ setState }: StateContext<Cart>, { cartCount }: SetCartCount) {
        setState({
            cartCount: cartCount,
        });
    }
}
