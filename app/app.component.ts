import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import dialogs = require("ui/dialogs");
import "rxjs/Rx";
import {Database} from "./database";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    providers: [Database]
})
export class AppComponent implements OnInit {

    public pokemon: Array<any>;

    public constructor(private http: Http, private database: Database) {
        this.pokemon = [];
    }

    public ngOnInit() {
        let rows = this.database.getDatabase().executeQuery("pokemon");
        if (rows.length < 1) {
            this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
                .map(result => result.json())
                .flatMap(result => result.results)
                .subscribe(result => {
                    this.database.getDatabase().createDocument(result);
                    this.pokemon.push(result);
                }, error => {
                    console.error(error);
                });
        } else {
            for (let i = 0; i < rows.length; i++) {
                this.pokemon.push(rows[i]);
            }
        }
    }

    public showInformation(index: number) {
        this.http.get("https://pokeapi.co/api/v2/pokemon/" + index)
            .map(result => result.json())
            .flatMap(result => result.types)
            .map(result => (<any> result).type.name)
            .toArray()
            .subscribe(result => {
                this.showDialog(result);
            }, error => {
                console.error(error);
            });
    }

    public showDialog(data: Array<string>) {
        dialogs.alert({
            title: "Information",
            message: "This Pokemon is of type(s) " + data.join(", "),
            okButtonText: "OK"
        });
    }

}
