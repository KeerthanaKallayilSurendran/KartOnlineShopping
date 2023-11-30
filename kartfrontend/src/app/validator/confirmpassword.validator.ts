import { FormGroup, ValidationErrors } from "@angular/forms";

// export const confirmPasswordValidator = (userPassword: string, userConfirmPassword: string) => {
//   return (formGroup: FormGroup) => {
//     let password = formGroup.controls[userPassword];
//     let confirmpassword = formGroup.controls[userConfirmPassword];
//     if(confirmpassword.errors && !confirmpassword.errors['confirmPasswordValidator']){
//       return
//     }
//     if(password.value !== confirmpassword.value){
//       confirmpassword.setErrors({confirmPasswordValidator: true})
//     }else{
//       confirmpassword.setErrors(null)
//     }
//   }
// }

export const confirmPasswordValidator = (userPassword: string, userConfirmPassword: string) => {
  return (formGroup: FormGroup): ValidationErrors | null => {
    let password = formGroup.controls[userPassword];
    let confirmpassword = formGroup.controls[userConfirmPassword];
    if(confirmpassword.errors && !confirmpassword.errors['confirmPasswordValidator']){
      return null;
    }
    if(password.value !== confirmpassword.value){
      confirmpassword.setErrors({confirmPasswordValidator: true})
      return {confirmPasswordValidator: true};
    }else{
      confirmpassword.setErrors(null)
      return null;
    }
  }
}