import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Alumno} from './models/alumno'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedAlumno: Alumno = new Alumno();
  


  
  alumnoArray:Alumno[]=[
    {id:1, nombre:"Yareli", apellido:"Campuzano"},
    {id:2, nombre:"Brenda", apellido:"Campuzano"},
    {id:3, nombre:"Zuleica", apellido:"Campuzano"},
    {id:4, nombre:"Bertha", apellido:"Campuzano"},
    {id:5, nombre:"Daniel", apellido:"Gonzales"},

  ];

  openForEdit(alumno:Alumno){
    this.selectedAlumno=alumno
  }

  addOrEdit(){

    if(this.selectedAlumno.id === 0){
      this.selectedAlumno.id= this.alumnoArray.length + 1;
    this.alumnoArray.push(this.selectedAlumno);
    } 

    this.selectedAlumno = new Alumno();
  }

   Eliminar() {
      if(confirm("¿ESTAS SEGURO DE QUERER ELIMINAR EL ELEMENTO?")){
        this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = new Alumno();
      }    


    }


  }

  
 


