import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'casilla-component',
	templateUrl: './casilla.component.html',
	styleUrls: ['./casilla.component.scss']
})
export class CasillaComponent implements OnInit {
	title: String = 'Casilla';
	coordenadas:Array<Number>;

	@Input()
		set posicion(posicion: Array<Number>){
		this.coordenadas = posicion;
	}
	get posicion(){
		return this.coordenadas;
	}

	constructor() { }

	ngOnInit(): void { }

	mostrarPosicion(){
		alert(`Posicion X: ${this.posicion[0]} | Posicion Y: ${this.posicion[1]}`);
	}
}
