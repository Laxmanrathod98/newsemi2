import { TestBed } from "@angular/core/testing";

import { BookStoreCommonService } from "./book-store-common.service";

describe("BookStoreCommonService", () => {
    let service: BookStoreCommonService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BookStoreCommonService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
