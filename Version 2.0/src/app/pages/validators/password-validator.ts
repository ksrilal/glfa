import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators {
  static checkPasswrod(control: AbstractControl): ValidationErrors | null {
    if (control.value != null || control.value != undefined) {

      const confirmPassword = control.value;

      const password = control.root.get("password");

      if (password) {
        if (password.value !== confirmPassword) {
          return { passwordNotMatch: true };
        }
      }
      return null;
    }
  }
}
