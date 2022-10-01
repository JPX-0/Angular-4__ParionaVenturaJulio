import { Component, OnInit } from '@angular/core';
import { Alumno_i } from 'src/app/models/alumnos.model';
import dbAlumnos from "src/assets/db/alumnos.db.json";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public ALUMNOS: Array<Alumno_i> = dbAlumnos;
  res_showAll: boolean = true;
  res_showOne: any = {};

  constructor() { }

  ngOnInit(): void { }

  showAll(): void {
    this.res_showAll = !this.res_showAll;
  }
  showOne(id: number): void {
    this.res_showOne[id] = !this.res_showOne[id];
  }

}
