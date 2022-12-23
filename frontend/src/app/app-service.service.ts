import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppServiceService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:8080";
  }

  initializeDB() {
    return this.http.get(`/api/dbinitialize`);
  }

  getTeacherData() {
    return this.http.get(`/api/listTeachers`);
  }

  getStudentData() {
    return this.http.get(`/api/listStudents`);
  }

  getOneStudentData(payload: Object) {
    return this.http.post(`/api/getStudentInfo`, payload);
  }

  getOneTeacherData(payload: Object) {
    return this.http.post(`/api/getTeacherInfo`, payload);
  }

  addTeacher(payload: Object) {
    return this.http.post(`/api/addTeacher`, payload);
  }

  deleteTeacher(payload: Object) {
    return this.http.post(`/api/deleteTeacher`, payload);
  }

  editTeacher(payload: Object) {
    return this.http.post(`/api/editTeacher`, payload);
  }

  editStudent(payload: Object) {
    return this.http.post(`/api/editStudent`, payload);
  }

  addStudent(payload: Object) {
    return this.http.post(`/api/addStudent`, payload);
  }

  deleteStudent(payload: Object) {
    return this.http.post(`/api/deleteStudent`, payload);
  }
}
