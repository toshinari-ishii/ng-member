import { Injectable } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@Injectable({
  providedIn: 'root',
})
export class DraganddropService {
  constructor(private draganddropService: DraganddropService) {}
}
