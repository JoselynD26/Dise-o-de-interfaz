import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css'],
})
export class MensajeriaComponent implements OnInit {
  
  //No poner undefinided
  messages: Message[] = [];
  messages1: Message[] = [] ;
  messages2: Message[] = [];
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = [
      { severity: 'info', detail: 'Info Message' },
      { severity: 'success', detail: 'Success Message' },
      { severity: 'warn', detail: 'Warning Message' },
      { severity: 'error', detail: 'Error Message' },
      { severity: 'secondary', detail: 'Secondary Message' },
      { severity: 'contrast', detail: 'Contrast Message' }
  ];

  this.messages1 = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
    { severity: 'info', summary: 'Info', detail: 'Message Content' },
];

this.messages2 = [
    { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
    { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
];
  }

  addMessages() {
    this.messages = [
        { severity: 'info', summary: 'Dynamic Info Message' },
        { severity: 'success', summary: 'Dynamic Success Message' },
        { severity: 'warn', summary: 'Dynamic Warning Message' }
    ];
}

clearMessages() {
    this.messages = [];
}

addSingle() {
  this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}

addMultiple() {
  this.messageService.addAll([
      { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
      { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }
  ]);
}

clear() {
  this.messageService.clear();
}
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
