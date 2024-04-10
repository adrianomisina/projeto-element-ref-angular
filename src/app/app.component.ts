import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>

  constructor(private readonly _elRef: ElementRef) {}

  ngOnInit()  {
    console.log(this._elRef)

    const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    console.log(divEl)

    divEl.textContent = "Sou uma outra div";
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('Cliquei na div')
    })
   }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'Minha Div';
    this.divEl.nativeElement.classList.add('minha-classe');
  }

  createElement() {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div';
    novaDiv.classList.add('bg-red')

    this._elRef.nativeElement.appendChild(novaDiv);
  }

}


