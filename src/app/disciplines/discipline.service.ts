import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Discipline } from './discipline.model';

const BACKEND_URL = environment.apiUrl + '/disciplines/';

@Injectable({ providedIn: 'root' })
export class DisciplineService {
  private disciplines: Discipline[] = [];
  private disciplinesUpdated = new Subject<{ disciplines: Discipline[] }>();

  constructor(private http: HttpClient, private router: Router) { }

  getDisciplines() {
    this.http
      .get<{ message: string; disciplines: any }>(
        BACKEND_URL
      )
      .pipe(
        map(disciplineData => {
          return {
            disciplines: disciplineData.disciplines.map(discipline => {
              return {
                id: discipline._id,
                name: discipline.name,
                credits: discipline.credits,
                classes: discipline.classes,
                courses: discipline.courses
              };
            }),
          };
        })
      )
      .subscribe(transformeddisciplineData => {
        this.disciplines = transformeddisciplineData.disciplines;
        this.disciplinesUpdated.next({
          disciplines: [...this.disciplines],
        });
      });
  }

  addDiscipline(name: string, credits: string, classes: null, courses: null) {
    const disciplineData = new FormData();
    disciplineData.append('name', name);
    disciplineData.append('credits', credits);
    disciplineData.append(null, classes);
    disciplineData.append(null, courses);
    this.http
      .post<{ message: string; post: Discipline }>(
        BACKEND_URL,
        disciplineData
      )
      .subscribe(responseData => {
        //alert(responseData);
        this.router.navigate(['/register-discipline']);
      }, error => {
        alert(error);
      });
  }

  getDisciplinesUpdateListener() {
    return this.disciplinesUpdated.asObservable();
  }

  getDiscipline(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      credits: string;
      courses: [string];
      classes: [string];
    }>(BACKEND_URL + id);
  }
}
