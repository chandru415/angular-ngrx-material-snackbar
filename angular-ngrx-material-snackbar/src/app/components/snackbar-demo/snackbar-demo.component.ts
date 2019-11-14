import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.scss']
})
export class SnackbarDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openSuccess(event: any) {}
  openInfo(event: any) {}
  openError(event: any) {}
  openEffect(event: any) {}
}
