import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  constructor(private auth: AngularFireAuth, public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  public user: any;

  ngOnInit(): void {
    this.auth.authState.subscribe((helo) => {
      if (helo) {
        this.user = helo;
      }
    });
  }

  public async logout() {
    try {
      await this.auth.signOut();
      this.user = null;
      alert('Đăng xuất thành công');
    } catch (err) {
      console.log(err);
    }
  }

  ngOnDestroy(): void {
    this.user = null;
  }
}





@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: './dialog-from-menu-example-dialog.html',
})
export class DialogFromMenuExampleDialog { }