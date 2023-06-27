import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import {createUserResponse} from '../../../data-types/dataTypes'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {

  submitted:boolean=false;

  createdData:createUserResponse | undefined;

  constructor(private user: UserService, private route: Router) {}

  displayStyle = 'none';

  closePopup() {
    this.displayStyle = 'none';
  }
  openPopup() {
    this.displayStyle = 'block';
  }

  createAccount(createaccform: any) {
    let data = createaccform.value;
    this.submitted = true
    this.user.createAccount(data).subscribe((result) => {

      this.createdData = result
      if (result) {

        this.openPopup();
        this.submitted=false
        createaccform.resetForm()
      }
    });
  }
}
