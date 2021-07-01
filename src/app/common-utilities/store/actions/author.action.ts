import { Author } from "./../../book-store-models/Author.model";

/**
 * Created the set action to set the selected author in state.
 * @params payload selected author
 */
export class SetAuthor {
    static readonly type = "[Author] Set";
    constructor(public payload: Author) {}
}
