import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector: 'app-test-component',
  template: `
  <form #testForm="ngForm">
  <input class="search__input" 
          [(ngModel)]="value" 
          name="value"
          [placeholder]="placeholder"
  >
</form>
  `
})
class TestComponent {
  public value: string;
  public placeholder = "Text to search";
}


describe('SearchComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>; 
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, SearchComponent ],
      imports: [ FormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render placeholder', () => {
    component.placeholder = "Text to search";
    fixture.detectChanges();
    const searchInput = element.query(By.css('.search__input')).nativeElement;
    expect(searchInput.getAttribute('placeholder')).toBe('Text to search');

  });


  it('should render value', fakeAsync(() => {
    setInputValue('some test string');
    expect(component.value).toBe('some test string');
  }));


  const setInputValue = (value: string) => {
    fixture.detectChanges();
    tick();

    const input = element.query(By.css('.search__input')).nativeElement;
    input.value = value;

    
    input.dispatchEvent(new Event('input'));
    
    tick();
  };

});
