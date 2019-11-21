import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('f', {static: false}) signUpForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };
  // submitted = false;
  //
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signUpForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'male'
  //   // });
  //   this.signUpForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }
  //
  // // onSubmit(form: NgForm) {
  // //   console.log(form.value);
  // // }
  //
  // onSubmit() {
  //   this.submitted = true;
  //   this.user.username = this.signUpForm.value.userData.username;
  //   this.user.email = this.signUpForm.value.userData.email;
  //   this.user.secretQuestion = this.signUpForm.value.secret;
  //   this.user.answer = this.signUpForm.value.questionAnswer;
  //   this.user.gender = this.signUpForm.value.gender;
  //   this.signUpForm.reset();
  // }

  @ViewChild('form', {static: false}) form;
  selectedSubscription = 'adv';
  submitted = false;

  inputForm = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    this.inputForm.email = this.form.value.email;
    this.inputForm.subscription = this.form.value.password;
    this.inputForm.password = this.form.value.subscriptions;
    this.form.reset();
  }
}
