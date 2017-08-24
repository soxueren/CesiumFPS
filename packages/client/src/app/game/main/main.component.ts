import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { JoinGameDialogComponent } from '../join-game-dialog/join-game-dialog.component';
import { CreateNewGameDialogComponent } from '../create-new-game-dialog/create-new-game-dialog.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private dialog: MdDialog) {
  }

  openCreateGameDialog() {
    this.dialog.open(CreateNewGameDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

  openJoinGameDialog() {
    this.dialog.open(JoinGameDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
