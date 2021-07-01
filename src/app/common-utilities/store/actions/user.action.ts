/**
 * Created the set action to set the selected userId in state.
 * @params payload selected userId
 */
export class SetUserId {
    static readonly type = "[LoginResponse] Set";
    constructor(public userId: number) {}
}
