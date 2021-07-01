import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BookPublisherDetailComponent } from "./book-publisher-detail.component";

describe("BookPublisherDetailComponent", () => {
    let component: BookPublisherDetailComponent;
    let fixture: ComponentFixture<BookPublisherDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookPublisherDetailComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookPublisherDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
