import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential2 } from 'src/app/_interfaces/credential2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  userList: any[] = []
  form: ICredential2 = {
    email: "",
    password: "",
    contact: [],
    name: "",
    role: "",
  }
  self: ICredential2 = {
    email: "",
    password: "",
    name: "",
    role: "",
    contact: [],
  }
  
  id: any

  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/').subscribe(
      (users: any) => {
        //console.log(users[0])
        this.userList = users

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
        //console.log(users[identify])
        this.id = users[identify]._id
        //console.log(this.id)
        this.self.name = users[identify].name,
        this.self.role = users[identify].role,
        this.self.email = users[identify].email,
        this.self.password = users[identify].password,
        this.self.contact = users[identify].contact
      },
    )
  }

  onSubmit(){
    console.log(this.form)
    this.http.post('http://localhost:3000/posts/', this.form).subscribe(
      (newUsers: any) => {
        console.log(newUsers)
      },
    )

  
    if(!this.self.contact.includes(this.form.email)){
      this.self.contact.push(this.form.email)
      //console.log(this.self)

      this.http.put('http://localhost:3000/posts/'+this.id, this.self).subscribe(
      (newUsers: any) => {
        newUsers = this.self
      },
    )
    }

  }


}
