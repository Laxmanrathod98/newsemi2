import { Subscription } from "rxjs";
import { ErrorMessages } from "../../constants/errors.enum";
import { NoOfAuthorsInPaginator, paginatorPageSize, pagintorPageSizeOptions } from "./../../constants/pagination.constants";
import { Author } from "./../../book-store-models/Author.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { BookStoreCommonService } from "../../services/book-store-common.service";

@Component({
    selector: "app-authors-list",
    templateUrl: "./authors-list.component.html",
    styleUrls: ["./authors-list.component.scss"],
})
export class AuthorsListComponent implements OnInit, OnDestroy {
    authorsData: Author[] = [];
    pageSlice: Author[] = [];
    error: String;
    pageSize: number = paginatorPageSize;
    pageSizeOptions: number[] = pagintorPageSizeOptions;
    subscription: Subscription = new Subscription();

    constructor(private service: BookStoreCommonService) {}

    /**
     * on init
     */
    ngOnInit(): void {
        this.subscription = this.service.getAuthorsData().subscribe(
            (data) => {
                (this.authorsData = data), (this.pageSlice = data.slice(0, NoOfAuthorsInPaginator));
            },
            (err) => {
                this.error = ErrorMessages.ERROR_MESSAGE;
            }
        );
    }

    /**
     * Gets Paginator data on Page Change
     */
    onPageChange(event: PageEvent) {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.authorsData.length) {
            endIndex = this.authorsData.length;
        }
        this.pageSlice = this.authorsData.slice(startIndex, endIndex);
    }

    /**
     * on destroy
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
