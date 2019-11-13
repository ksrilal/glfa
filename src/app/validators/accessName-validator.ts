import { AbstractControl, ValidationErrors } from '@angular/forms';


export class AccessName {
  static validate(control: AbstractControl): ValidationErrors | null {
    if(control.value == '') {
      return {noSelected: true}
    }
    return null;
  }
}
