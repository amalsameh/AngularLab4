import { Component } from '@angular/core'
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { userService } from './app.userService'

@Component({
    selector: 'user-Form',
    templateUrl: './app.userForm.html'
})
export class userForm {
    data: object;
    posts: object;
    _userForm: FormGroup;
    constructor(private _fb: FormBuilder, private _userService: userService) {
        this.createForm();
    }
    createForm(): void {
        this._userForm = this._fb.group({
            name: Validators.required,
            email: [Validators.required, Validators.email],
            posts: Validators.minLength(10)
        });
    }
    onSubmit()
    {
        console.log(this._userForm);
     }
    getData() {
        this._userService.getUserData(1).subscribe(res => {
            this.data = res;
            this._userService.getUserPosts(1).subscribe(res => this.posts = res, err => console.log(err));
        }, err => console.log(err))
    }
}