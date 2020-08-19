import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    {id: 1, nome: 'Pedro', email: 'pefecomemo@gmail.com'},
    {id: 2, nome: 'Cintia', email: 'arthur@cintia.com'},
    {id: 3, nome: 'Arthur', email: 'cintia@arthur.com'},
    {id: 4, nome: 'Fofão', email: 'fofao@fofao.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
