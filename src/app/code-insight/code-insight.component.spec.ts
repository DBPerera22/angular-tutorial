import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInsightComponent } from './code-insight.component';

describe('CodeInsightComponent', () => {
  let component: CodeInsightComponent;
  let fixture: ComponentFixture<CodeInsightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeInsightComponent]
    });
    fixture = TestBed.createComponent(CodeInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
