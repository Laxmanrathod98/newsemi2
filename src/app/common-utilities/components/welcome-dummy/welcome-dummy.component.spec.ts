import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WelcomeDummyComponent } from "./welcome-dummy.component";

describe("WelcomeDummyComponent", () => {
    let component: WelcomeDummyComponent;
    let fixture: ComponentFixture<WelcomeDummyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WelcomeDummyComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeDummyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
