import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have form text input for username ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="userName"]')).toBeTruthy();
  });

  it('should have form email input for useremail ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="userEmail"]')).toBeTruthy();
  });

  it('should have form button of type submit ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="submitBtn"]').type).toBe('submit');
  });

  it('should have button labeled Register ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="submitBtn"]').innerText).toBe("Register");
  });
});
