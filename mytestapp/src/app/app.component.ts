import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccordionModule, ToastModule, ButtonModule, TableModule, RatingModule, TagModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mytestapp';
  products!: any;
  cols!: any;

  ngOnInit(): void {
    this.products = [
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
      {
        code: "TECH123",
        name: "Tony Stark",
        category: "Avengers",
        quantity: 1
      },
    ];
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  }

  constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
}
