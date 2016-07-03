import {Component, Injectable} from '@angular/core';
import { HTTP_PROVIDERS, Http }  from '@angular/http';
import {Category, Item} from './../../shared/model/incoming/itemModel';
import * as listService from './../../shared/services/listService'
@Component({
  selector: 'list-conrol',
  templateUrl: `pages/Dashboard/list.html`
})
export class ListPage {
  items: List<Item> = null;
  constructor(http: Http) {
    let self = this;
    self.items = [];
    setInterval(function () {
      let item = new Item();
      item.ItemName = "Test"
      self.items.push(item);
    }, 3000);
  }
}