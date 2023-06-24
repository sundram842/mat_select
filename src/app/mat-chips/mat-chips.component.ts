import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['./mat-chips.component.css']
})
export class MatChipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chips: string[] = ['Chip 1', 'Chip 2', 'Chip 3'];

  removeChip(chip: string): void {
    const chipIndex = this.chips.indexOf(chip);
    if (chipIndex > -1) {
      this.chips.splice(chipIndex, 1);
    }
  }

}
