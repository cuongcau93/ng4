import { Component } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent{
    private pageTitle: string = 'Product List';
}