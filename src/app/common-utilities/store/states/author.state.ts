import { Author } from "./../../book-store-models/Author.model";
import { SetAuthor } from "./../actions/author.action";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

/**
 * it is used as a data type of state.
 */
export class AuthorModel {
    author: Author;
}
/**
 * @State decorator to describe metadata.
 */
@State<AuthorModel>({
    name: "author",
    defaults: {
        author: null,
    },
})
@Injectable()
export class AuthorState {
    constructor() {}

    /**
     * @Selector to return selected author from state
     */
    @Selector()
    static getAuthor(state: AuthorModel) {
        return state.author;
    }

    /**
     * @Action binds SetAuthor and also used to store selected author data into state.
     */
    @Action(SetAuthor)
    setAuthor({ setState }: StateContext<AuthorModel>, { payload }: SetAuthor) {
        setState({
            author: payload,
        });
    }
}
