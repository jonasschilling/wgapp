import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItemdialogComponent } from '../../components/itemdialog/itemdialog.component';


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  shoppingList!: Item[];
  db!: AngularFireDatabase;
  editState: boolean = false;
  itemToEdit!: Item;

  constructor(private itemService: ItemService, public dialog: MatDialog) {
    // this.db = db;
    // db.list('/shoppinglist').valueChanges().subscribe(shoppingListItems => {
    //   this.shoppingList = shoppingListItems;
    //   console.log(this.shoppingList);
    // })
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.shoppingList = items;
    })
  }

  addItem = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(ItemdialogComponent, dialogConfig);
  }

  deleteItem = (item:any) => {
    this.itemService.deleteItem(item);
  }

  editItem = (item:any) => {
    this.editState = true;
    this.itemToEdit = item;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(ItemdialogComponent, dialogConfig);

    // let input = prompt("Edit item:", item.name);
    // if (input?.trim() !== "" && input !== null) {
    //   this.db.list('/shoppinglist').set('-MWF2MIettwPcK-yjVr_', {
    //     name: input,
    //     description: item.description,
    //     done: item.done
    //   })
    // }
  }

  toggleCheck = (item:any) => {
    item.done = !item.done;
  }

}
