import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-met-check',
  templateUrl: './met-check.component.html',
  styleUrls: ['./met-check.component.css']
})
export class MetCheckComponent implements OnInit {
  isDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  foodControl: FormControl = new FormControl();

  logSelectedValue() {
    const selectedValue1 = this.foodControl.value;
    console.log(selectedValue1);

     const selectedValue2 = this.foodControl.value;
  const selectedFood = this.foods.find(food => food.value === selectedValue2);
  console.log(selectedFood);
  }

  setSelectedValue()
  {
    this.foodControl.setValue('steak-0')
  }

  toggleDisable()
  {
    this.isDisabled = !this.isDisabled;
  }
  disablePizzaOption() {
    const pizzaOption = this.foods.find(food => food.value === 'pizza-1');
    if (pizzaOption) {
      pizzaOption.disabled = !pizzaOption.disabled;
    }
  }
}
