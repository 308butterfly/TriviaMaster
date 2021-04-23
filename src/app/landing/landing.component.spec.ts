import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show trivia master logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  it('should have a button to sign up', () => {
    expect(fixture.nativeElement.querySelector('[data-test="signUp"]')).toBeTruthy();
  });

  it('should have a button labeled "Sign Up" ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="signUp"]').innerText).toEqual("Sign Up");
  });

  it('should have a button to login', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logIn"]')).toBeTruthy();
  });

  it('should have a button labeled "Login" ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logIn"]').innerText).toEqual("Login");
  });

  


});
