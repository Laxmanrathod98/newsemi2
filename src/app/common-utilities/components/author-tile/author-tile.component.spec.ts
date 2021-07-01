import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthorTileComponent } from "./author-tile.component";

describe("AuthorTileComponent", () => {
    let component: AuthorTileComponent;
    let fixture: ComponentFixture<AuthorTileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthorTileComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
