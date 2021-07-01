import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { SetUserId } from "../actions/user.action";

/**
 * it is used as a data type of state of userId.
 */
export class LoginResponseModel {
    userId: number;
}

/**
 * @State decorator to describe metadata for userId.
 */
@State<LoginResponseModel>({
    name: "userId",
    defaults: {
        userId: 0,
    },
})
@Injectable()
export class UserState {
    constructor() {}

    /**
     * @Selector to return selected userId from state
     */
    @Selector()
    static getUserId(state: LoginResponseModel) {
        return state.userId;
    }
    /**
     * @Action binds SetUserId and also used to store selected userId data into state.
     */
    @Action(SetUserId)
    setUser({ setState }: StateContext<LoginResponseModel>, { userId }: SetUserId) {
        setState({
            userId: userId,
        });
    }
}
