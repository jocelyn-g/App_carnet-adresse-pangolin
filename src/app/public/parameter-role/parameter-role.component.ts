import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential2 } from 'src/app/_interfaces/credential2';


@Component({
  selector: 'app-parameter-role',
  templateUrl: './parameter-role.component.html',
  styleUrls: ['./parameter-role.component.css']
})

export class ParameterRoleComponent  implements OnInit {

  self: any = {}

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/').subscribe(
      (users: any) => {
        let identify = 0
        let count = 0
        for(let user of users){
          let emaillocal = localStorage.getItem('email')
          if(user.email == emaillocal){
            identify = count
          }else{
            count = count + 1
          }
        }
        console.log(users[identify])
        this.self = {
          name: users[identify].name,
          email: users[identify].email,
          password: users[identify].password,
          contact: users[identify].contact,
        }
      },
    )
  }

  form: ICredential2 = {
    email: this.self.email,
    password: this.self.password,
    name: this.self.name,
    role: "",
    contact: this.self.contact,
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
