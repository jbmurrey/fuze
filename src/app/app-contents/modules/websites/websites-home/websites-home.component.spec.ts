import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsitesHomeComponent } from './websites-home.component';

describe('WebsitesHomeComponent', () => {
  let component: WebsitesHomeComponent;
  let fixture: ComponentFixture<WebsitesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});