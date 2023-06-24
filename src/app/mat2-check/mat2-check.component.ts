import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat2-check',
  templateUrl: './mat2-check.component.html',
  styleUrls: ['./mat2-check.component.css']
})
export class Mat2CheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
