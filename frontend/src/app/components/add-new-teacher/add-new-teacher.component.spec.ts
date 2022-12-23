import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import '@types/jest';
import { AddNewTeacherComponent } from './add-new-teacher.component';

describe('AddNewTeacherComponent', () => {
  let component: AddNewTeacherComponent;
  let fixture: ComponentFixture<AddNewTeacherComponent>;



  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

