import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string }
  myParamSubscription: Subscription

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // id: this.activatedRoute.snapshot.params['id'],
      id: this.activatedRoute.snapshot.params.id,
      // name: this.activatedRoute.snapshot.params['name']
      name: this.activatedRoute.snapshot.params.name
    };
    this.myParamSubscription =  this.activatedRoute.params
      .subscribe(
        (myParams: Params) => { this.user.id = myParams.id; this.user.name = myParams.name }
      )
  }

  ngOnDestroy() {
    // this is the correct way to be sure this is going to be garbage collected
    this.myParamSubscription.unsubscribe()
  }

}
