import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../Services/message.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registration } from '../Models/User.Models';
import { RegistrationService } from '../Services/Registration.Service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registrationForm: FormGroup;
  registrationInputs: Registration[];

  @Input()
  public alerts: Array<IAlert> = [];
  message = "";
  public globalResponse: any;

  constructor(private fb: FormBuilder, private regService: RegistrationService,
    public messageService: MessageService,private activeModel:NgbActiveModal) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      UserName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Role: ['', Validators.required],
      Phone: ['', Validators.required],
      Gender: ['', ''],
    });
  }

  OnRegister() {
    this.activeModel.close();
    alert(this.registrationForm.value)
    this.registrationInputs = this.registrationForm.value;
    console.log(this.registrationInputs);
    this.regService.RegisterUser(this.registrationInputs)
      .subscribe((result) => {
        this.globalResponse = result;
      },
        error => { //This is error part
          this.alerts.push({
            id: 2,
            type: 'danger',
            message: 'Registration failed with fallowing error:' + error,
          });
        },
        () => { //  This is Success part
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'Registration successful.',
          });
        }
      )
  }

  close(){
    this.activeModel.close();
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
