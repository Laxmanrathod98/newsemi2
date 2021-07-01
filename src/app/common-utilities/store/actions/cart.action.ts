/**
 * Created the set action to set the selected cartCount in state.
 * @params payload selected cartCount
 */
export class SetCartCount {
    static readonly type = "[Cart] Set";
    constructor(public cartCount: number) {}
}
