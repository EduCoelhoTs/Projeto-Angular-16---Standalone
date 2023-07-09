import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/utilities/storage/storage.service';
import { TesteService } from 'src/app/utilities/storage/teste.service';

@Component({
  selector: 'app-criacao',
  templateUrl: './criacao.component.html',
  styleUrls: ['./criacao.component.css'],
  standalone: true,
  imports: []
})
export class CriacaoComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private testeService: TesteService
  ) { }

  ngOnInit() {
    console.log('storageService')
    this.storage.createTopic('teste');
    this.storage.createTopic('teste 2');
    this.storage.updateTopic('teste', [1, 2, 3, 4])
    this.storage.getTopic('teste').subscribe(
      console.log
    )

    console.log('testeService')
    this.testeService.createTopic('topico');

  }

}
