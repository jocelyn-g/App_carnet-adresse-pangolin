import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userList: any[] = []

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/').subscribe(
      (users: any) => {
        console.log(users)
        this.userList = users
      },
    )
  }

  onClick(){
    console.log()
  }

}
