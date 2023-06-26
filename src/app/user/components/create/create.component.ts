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

  createdData:createUserResponse | undefined;

  constructor(private user: UserService, private route: Router) {}

  displayStyle = 'none';

  closePopup() {
    this.displayStyle = 'none';
  }
  openPopup() {
    this.displayStyle = 'block';
  }

  createAccount(data: any) {
    this.user.createAccount(data).subscribe((result) => {

      this.createdData = result
      if (result) {

        this.openPopup();
      }
    });
  }
}
