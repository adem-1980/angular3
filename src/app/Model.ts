export class Model{

    user;
    items;
    items2;

    constructor ()
    {
this.user="Aras";
this.items=[

    {"description":"Kahvalti","action":"No"},
    
    {"description":"Spor","action":"No"},
    
    {"description":"Sinema","action":"No"},
    
    {"description":"Ders","action":"No"}

];

this.items2=[  

    new TodoItem("Kahvalti",false),
    new TodoItem("Spor",true),
    new TodoItem("Sinema",false),
    new TodoItem("Ders",false),
    
];
    }


}

export class TodoItem{

   description;

   action;

   constructor(description:string,action:Boolean){

    this.description=description;
    this.action=action;

   }

}