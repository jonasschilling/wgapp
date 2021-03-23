import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-itemdialog',
  templateUrl: './itemdialog.component.html',
  styleUrls: ['./itemdialog.component.css']
})
export class ItemdialogComponent implements OnInit {

  name = new FormControl('');
  details = new FormControl('');

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  addItem = () => {
    let item: Item = {
      name: this.name.value,
      description: this.details.value,
      done: false
    }
    this.itemService.addItem(item);
  }

}
