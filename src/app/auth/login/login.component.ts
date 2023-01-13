import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ICredential} from 'src/app/_interfaces/credential';
import { IToken} from 'src/app/_interfaces/token';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: ICredential = {
    email:'',
    password: '',
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
    ){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.email)
    this.authService.login(this.form).subscribe(
      (data: IToken) => {
        console.log(data.access_token),
        this.tokenService.saveToken(data.access_token)
        localStorage.setItem('email', this.form.email)
      },
      err => console.log(err.error)
    )
  }
}
