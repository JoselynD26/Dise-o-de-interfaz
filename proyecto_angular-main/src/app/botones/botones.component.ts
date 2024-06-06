import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
  providers: [MessageService],
})
export class BotonesComponent implements OnInit {

  items: MenuItem[];
  messages: Message[] | undefined = [];

  constructor(private messageService: MessageService) {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh', command: () => this.update() },
      { label: 'Delete', icon: 'pi pi-times', command: () => this.delete() },
      { label: 'Angular Website', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', icon: 'pi pi-upload', routerLink: ['/fileupload'] }
    ];
   }

  ngOnInit() {
    this.messages = [{ severity: 'info', detail: 'Message Content' }];
  }

  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    console.log("asdawsdasd")
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

  onSaveClick() { 
    this.save("asdasda");
  }

}
