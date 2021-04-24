import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display 404 error message to user', () => {
    expect(fixture.nativeElement.querySelector('[data-test="errorMsg"]').innerText).toEqual("What you doin' here?!");
  });

  it('should have a button to return to the landing page', () => {
    expect(fixture.nativeElement.querySelector('[data-test="return2KnotsLanding"]')).toBeTruthy();
  });

  it('should return to landing page after clicking only button on page', () => {
    expect(fixture.nativeElement.querySelectorAll('button').length).toBe(1);
    // todo test check button sends to landing page
  });

  
});
