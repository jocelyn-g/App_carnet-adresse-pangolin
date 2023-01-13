import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent implements OnInit {

  constructor(private tokenService: TokenService){}

  ngOnInit(): void{
  }

  logout(): void{
    this.tokenService.clearToken()
  }

}
