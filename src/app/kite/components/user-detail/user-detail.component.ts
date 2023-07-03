import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { userData } from 'src/app/store/actions/kiteuser.actions';
import { KiteService } from '../../providers/services/kite.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  allUsers: any;
  userdata: any;
  userDetails: any;

  constructor(
    private store: Store,
    private kite: KiteService,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.kite
      .getallUser()
      .then((response: any) => {
        this.allUsers = response.data.data;

        const roleId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(roleId);
        console.log(this.allUsers);

        if (this.allUsers) {
          let userDetail = this.allUsers.map((data: any) => {
            // console.log(data);
            if (data._id == roleId) {
              this.userdata = data;
              return data;
            }
          });


          if (!this.userdata) {
            this.toaster.error('Invalid Id');
            this.route.navigate(['kite/users']);
          }
        }
        this.store.dispatch(userData({ userdata: this.userdata }));
      })
      .catch((error) => {
        this.toaster.error(error.error.message);
      });
  }
}
