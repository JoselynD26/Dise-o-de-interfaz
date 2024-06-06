import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AppServiceService } from './services/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  title = 'jos';
  
  items: MenuItem[];

  //galery

  images: any[] | undefined = [];

  responsiveOptions: any[] | undefined;

  constructor(private messageService: MessageService, private appService:AppServiceService, private router: Router) {
    this.items = [
      { label: 'Botones', icon: 'pi pi-bullseye', command: () => this.redirect("botones") },
      { label: 'Media', icon: 'pi pi-images', command: () => this.redirect("galeria") },
      { label: 'Mensajeria', icon: 'pi pi-envelope', command: () => this.redirect("mensajeria") },
      { label: 'Carrusel', icon: 'pi pi-envelope', command: () => this.redirect("carrusel") },
      { label: 'Organizacion Texto', icon: 'pi pi-sort-alpha-down', command: () => this.redirect("organizacion") },
      { label: 'Cards', icon: 'pi pi-sort-alpha-down', command: () => this.redirect("card") },
      
      { separator: true }
    ];
  }

  ngOnInit(): void {
    
    this.appService.getImages().then((images) => {
      console.log(images);
      this.images = images
    });
    console.log(this.images);
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
  }
  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

  redirect(value:string){
    this.router.navigate(["/"+value])
  }

  onValueChange(event: any) {
    this.images = event; // o el ajuste necesario según el evento
  }
}
