import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, SimpleChanges, EventEmitter, Output } from '@angular/core';
import jsPDF from 'jspdf';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less'],
})
export class SignatureComponent implements OnInit {
  @ViewChild('myCanvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  selectedColor: string = 'black';
  filename :string='';
  isDrawing: boolean;
  isModalOpen: boolean = false;
  modalContent: any;

  constructor(private modalService: ModalService) {
    this.modalService.modalState$.subscribe((state) => {
      this.isModalOpen = state;
    });
  }

  openModal(): void {
    this.modalContent = {
      title: 'Custom Modal Content',
      description: 'This is some custom content for the modal.',
    };
    this.modalService.openModal();
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  onColorChanged(color: string | Event) {
    if (typeof color === 'string') {
      this.selectedColor = color;
    } else if (color instanceof Event) {
      const colorValue = (color.target as HTMLInputElement).value;
      this.selectedColor = colorValue;
    }
    this.context.strokeStyle = this.selectedColor;
  }

  ngOnInit() {
    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.drawInitial();
  }

  private drawInitial() {
    this.context.fillStyle = 'lightgray';
    this.context.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }

  public clearCanvas() {
    this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.drawInitial();
  }

  startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.draw(event);
  }

  draw(event: MouseEvent) {
    if (!this.isDrawing) return;

    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.context.lineTo(x, y);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(x, y, 1, 0, 2 * Math.PI);
    this.context.fill();
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  endDrawing(event: MouseEvent) {
    this.isDrawing = false;
    this.context.beginPath();
  }
  getSignature(){
    const imageDataUrl = this.canvasRef.nativeElement.toDataURL();
    console.log('Signature Data:', imageDataUrl);
  }

  convertToImg(){
   
        const imgData = this.canvasRef.nativeElement.toDataURL();
        // Create a download link
        const link = document.createElement('a');
        link.href = imgData;
        link.download = this.filename;

        // Append the link to the document and trigger a click event to start the download
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
        console.log('PNG Image Data:', imgData);


  }

  convertToPdf(){
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      const imgData = this.canvasRef.nativeElement.toDataURL('image/png');
      const pdf = new jsPDF();
    
      pdf.addImage(imgData, 'PNG', 10, 10, 50, 25);
      // You can customize the position (10, 10) and dimensions (50, 25) as needed.
    
      // Save the PDF or perform further actions.
      pdf.save(this.filename);
    }
    
  }
  
