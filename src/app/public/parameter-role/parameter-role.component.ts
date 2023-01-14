import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICredential2 } from 'src/app/_interfaces/credential2';


@Component({
  selector: 'app-parameter-role',
  templateUrl: './parameter-role.component.html',
  styleUrls: ['./parameter-role.component.css']
})

export class ParameterRoleComponent  implements OnInit {

  self: ICredential2 = {
    email: "",
    password: "",
    name: "",
    role: "",
    contact: "",
  }
  id: any

  constructor(
    private activated: ActivatedRoute,
    private http: HttpClient
    ){}

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
        this.id = users[identify]._id
        console.log(this.id)
        this.self.name = users[identify].name,
        this.self.email = users[identify].email,
        this.self.password = users[identify].password,
        this.self.contact = users[identify].contact
      },
    )
  }


  onSubmit(){
    console.log(this.self)
    this.http.put('http://localhost:3000/posts/'+this.id, this.self).subscribe(
      (newUsers: any) => {
        newUsers = this.self
      },
    )
  }
}
