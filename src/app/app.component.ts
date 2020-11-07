import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title:String = 'Tablero';
	mOrdenCasillas = [];
	
	ngOnInit(): void {
		this.crearTablero(10, 10);
	}

	crearTablero(casillasX:Number, casillasY:Number){
		for(let x = 0; x<casillasX; x++){
			for(let y = 0; y<casillasY; y++){
				this.mOrdenCasillas.push([y+1, x+1]);
			}
		}
	}
}
