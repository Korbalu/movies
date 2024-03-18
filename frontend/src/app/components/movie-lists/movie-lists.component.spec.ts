import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsComponent } from './movie-lists.component';

describe('MovieListsComponent', () => {
  let component: MovieListsComponent;
  let fixture: ComponentFixture<MovieListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListsComponent]
    });
    fixture = TestBed.createComponent(MovieListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
