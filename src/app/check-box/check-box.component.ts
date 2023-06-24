import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
})
export class CheckBoxComponent implements OnInit {
  selectedSubtasks: any[] = [];
  /*The SelectionModel is a utility class provided by Angular
   Material that helps manage the selection state of a collection 
   of items. It provides convenient methods for selecting, deselecting,
    and querying the selection state of items.*/
  selection = new SelectionModel<any>(true, []);
  SelectedEmployeeIds: any[] = [];
  allToggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  subtasks = [
    { name: 'Primary', completed: false, color: 'primary' },
    { name: 'Accent', completed: false, color: 'accent' },
    { name: 'Warn', completed: false, color: 'warn' },
  ];

  toggleCompletion(event: any, itemObj: any) {
    if (event.checked == true) {
      this.allToggle=true;
      this.selection.select(itemObj);
      console.log(this.selection.selected.length);
    } else if (event.checked === false) {
      this.allToggle = false;
      this.selection.deselect(itemObj);
      console.log(this.selection.selected.length);
    }
  }

  printSlectedItem() {
    console.log(this.selectedSubtasks);
  }

  masterToggle(event: any) {
    if (event === true) {
      this.subtasks.map((data) => {
        this.selection.select(data);
      });
    }
    if(event===false)
    {
      this.subtasks.map((data) => {
        this.selection.deselect(data);
      });
    }
  }
}
