
export class Category {
    Id: string;
    CategoryName: string;
    MasterItems: any;
}

export class Item {
    Id: string;
    ItemName: string;
    CategoryId: string;
    Category: Category;
}


