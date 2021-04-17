import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    {
      name: 'Add data',
      link: '/add-data'
    },
    {
      name: 'Table',
      link: '/table'
    },
    {
      name: 'Edit data',
      link: '/edit-data'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
