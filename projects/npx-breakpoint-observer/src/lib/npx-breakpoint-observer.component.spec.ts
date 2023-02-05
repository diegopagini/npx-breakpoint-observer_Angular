import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxBreakpointObserverComponent } from './npx-breakpoint-observer.component';

describe('NpxBreakpointObserverComponent', () => {
  let component: NpxBreakpointObserverComponent;
  let fixture: ComponentFixture<NpxBreakpointObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpxBreakpointObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpxBreakpointObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
