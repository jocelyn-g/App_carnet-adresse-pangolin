import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential2 } from 'src/app/_interfaces/credential2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  userList: any[] = []

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
        console.log(users[0])
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
        console.log(users[identify])
        this.id = users[identify]._id
        console.log(this.id)
        this.self.name = users[identify].name,
        this.self.role = users[identify].role,
        this.self.email = users[identify].email,
        this.self.password = users[identify].password,
        this.self.contact = users[identify].contact
      },
    )
  }

  getContact = 0
  increment = 0
  btnDelete(getId:any, getemail:any){
    this.increment = 0
    console.log(getId)
      //this.self.contact.push(getId)
      console.log(this.self)
      for(let index of this.self.contact){
        if(index !== getId || index !== getemail){
          this.increment = this.increment + 1
        }else{
          this.getContact = this.increment
        }
      }
      console.log(`l'index est ${this.getContact}`)
      this.self.contact.splice(this.getContact, 1)
      console.log(this.self.contact)

      this.http.put('http://localhost:3000/posts/'+this.id, this.self).subscribe(
      (newUsers: any) => {
        newUsers = this.self
      },
    )
    
  }

}
