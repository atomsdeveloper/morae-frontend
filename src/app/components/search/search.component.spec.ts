import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    // Checa se o componente foi criado.
    expect(component).toBeTruthy();
  });

  it('should have an input element with placeholder value and share icon', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));

    // Checa se existe um input no dentro do componente.
    expect(inputElement).toBeTruthy();
    // Checa se o input tem o placeholder correto.
    expect(inputElement.nativeElement.placeholder).toBe(
      'Enter Address, rooms or price... '
    );
    const iconElement = fixture.debugElement.query(By.css('.icon-share'));
    // Checa se o icone do input é o icone correto.
    expect(iconElement).toBeTruthy();

    // Checa se está dentro de um elemento pai.
    expect(inputElement.parent).toBeTruthy();
    expect(iconElement.parent).toBeTruthy();
    // Checa se ambos têm o mesmo elemento pai e que ele não é null
    expect(inputElement.parent?.nativeElement).toBe(
      iconElement.parent?.nativeElement
    );
  });
});
