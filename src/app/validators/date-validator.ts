import { AbstractControl, ValidationErrors } from "@angular/forms";


export class DateValidator{
  static dateCompare(control: AbstractControl): ValidationErrors | null {
    if (control.value != null || control.value != undefined) {

      const to = control.value;

      const from = control.root.get("dateFrom");

      if (to) {
        if (to.value <= from) {
          return { datesMismatch: true };
        }
      }
      return null;
    }
  }
}
