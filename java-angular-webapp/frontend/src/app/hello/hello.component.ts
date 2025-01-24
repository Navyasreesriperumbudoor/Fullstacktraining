import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  message: string = '';

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getHelloMessage().subscribe((data: string) => {
      this.message = data;
    });
  }
}
