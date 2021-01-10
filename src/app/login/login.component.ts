import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Command, Key } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm){
    console.log(form.value);

    if(form.value.email === "admin@admin.com" && form.value.password === "7890"){
  

    }

  }

}
