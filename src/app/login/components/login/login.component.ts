import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ErrorMessages } from "../../../common-utilities/constants/errors.enum";
import { Store } from "@ngxs/store";
import { SetUserId } from "src/app/common-utilities/store/actions/user.action";
import { BookStoreCommonService } from "src/app/common-utilities/services/book-store-common.service";
import { LoginResponse } from "src/app/common-utilities/book-store-models/LoginResponse.model";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    constructor(private _snackbar: MatSnackBar, private router: Router, private service: BookStoreCommonService, private store: Store) {}
    requiredError: string = ErrorMessages.REQUIRED_ERROR;
    lengthValidatorError: string = ErrorMessages.LENGTH_VALIDATOR_ERROR;
    invaldError: string = ErrorMessages.INVALID_ERROR_MESSAGE;
    timeout: number = ErrorMessages.TIMEOUT_FOR_ERROR;
    loginResponse: LoginResponse;
    login: FormGroup = new FormGroup({
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });

    /**
     * on submiting the form data
     */
    onSubmit() {
        if (this.login.valid) {
            localStorage.removeItem("token");
            this.service.login(this.login.value).subscribe(
                (data) => {
                    this.loginResponse = data;
                    localStorage.setItem("token", this.loginResponse.jwt);
                    this.store.dispatch(new SetUserId(this.loginResponse.userId));
                    this.router.navigate(["/dashboard"]);
                },
                (err) => {
                    this._snackbar.open(this.invaldError, "ok", {
                        duration: this.timeout,
                        horizontalPosition: "center",
                        verticalPosition: "top",
                        panelClass: "error",
                    });
                }
            );
        }
    }
}
