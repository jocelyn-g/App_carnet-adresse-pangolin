import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
          role: users[identify].role
        }
      },
    )
  }
}
