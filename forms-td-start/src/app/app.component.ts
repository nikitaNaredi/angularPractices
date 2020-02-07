import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultOptions= 'pet';
  genders = ['male','female'];
  @ViewChild ('f', {'static': true}) formObject: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onsubmit() {
    console.log(this.formObject);
    this.formObject.reset();
    }

    suggestValue(){
      // this.formObject.form.setValue({
      //   userdata: {
      //     username: 'Niki',
      //     email: 'j@d.c'
      //   },
      //   secret: 'pet',
      //   gender: 'male'
      // });
      this.formObject.form.patchValue({
        secret: 'teacher'
      })
      this.formObject.form.reset
    }
}
