import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})

export class DragAndDropComponent {
  one = ['大城 賢剛', '福士 義和'];
  two = ['新川 盛幸', '仲里 淳矢'];
  three = ['徳元 拓真', '金城 裕也'];
  four = ['高良 真也', '石井 俊成'];
  five = ['宮里 優希', '具志 直'];
  six = ['テックキッズ', 'テックキッズ'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}


export class DragAndDropComponent {}
