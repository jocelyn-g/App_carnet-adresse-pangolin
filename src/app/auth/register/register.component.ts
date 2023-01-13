import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential2 } from 'src/app/_interfaces/credential2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent  implements OnInit {



  form: ICredential2 = {
    email: "",
    password: "",
    name: "",
    role: "",
    contact: [],
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
    this.http.post('http://localhost:3000/posts/', this.form, {withCredentials:true}).subscribe(
      (newUsers: any) => {
        newUsers = this.form
      },
    )
  }
}
