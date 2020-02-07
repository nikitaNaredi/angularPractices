import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupform : FormGroup;

  ngOnInit() {
    this.signupform = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.email, Validators.required])
      }),
      'hobbies': new FormArray([]),
      'gender': new FormControl('male')
    })
  }
  onsubmit(){
    console.log(this.signupform);
  }
  getControls(){
    return (<FormArray>this.signupform.get('hobbies')).controls;
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    return (<FormArray>this.signupform.get('hobbies')).push(control);
  }
}


