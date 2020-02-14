import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransChatComponent } from './trans-chat.component';

describe('TransChatComponent', () => {
  let component: TransChatComponent;
  let fixture: ComponentFixture<TransChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
