import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from 'src/app/utilities/storage/storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.storage.createTopic('home');
  }

  ngOnDestroy() {
    this.storage.clearTopic('home');
    this.storage.removeTopic('home');
  }

}
