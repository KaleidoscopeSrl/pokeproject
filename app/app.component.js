"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var dialogs = require("ui/dialogs");
require("rxjs/Rx");
var database_1 = require("./database");
var AppComponent = (function () {
    function AppComponent(http, database) {
        this.http = http;
        this.database = database;
        this.pokemon = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rows = this.database.getDatabase().executeQuery("pokemon");
        if (rows.length < 1) {
            this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
                .map(function (result) { return result.json(); })
                .flatMap(function (result) { return result.results; })
                .subscribe(function (result) {
                _this.database.getDatabase().createDocument(result);
                _this.pokemon.push(result);
            }, function (error) {
                console.error(error);
            });
        }
        else {
            for (var i = 0; i < rows.length; i++) {
                this.pokemon.push(rows[i]);
            }
        }
    };
    AppComponent.prototype.showInformation = function (index) {
        var _this = this;
        this.http.get("https://pokeapi.co/api/v2/pokemon/" + index)
            .map(function (result) { return result.json(); })
            .flatMap(function (result) { return result.types; })
            .map(function (result) { return result.type.name; })
            .toArray()
            .subscribe(function (result) {
            _this.showDialog(result);
        }, function (error) {
            console.error(error);
        });
    };
    AppComponent.prototype.showDialog = function (data) {
        dialogs.alert({
            title: "Information",
            message: "This Pokemon is of type(s) " + data.join(", "),
            okButtonText: "OK"
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app.component.html",
        providers: [database_1.Database]
    }),
    __metadata("design:paramtypes", [http_1.Http, database_1.Database])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBcUM7QUFDckMsb0NBQXVDO0FBQ3ZDLG1CQUFpQjtBQUNqQix1Q0FBb0M7QUFPcEMsSUFBYSxZQUFZO0lBSXJCLHNCQUEyQixJQUFVLEVBQVUsUUFBa0I7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO2lCQUN2RCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2lCQUM1QixPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQztpQkFDakMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDYixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVNLHNDQUFlLEdBQXRCLFVBQXVCLEtBQWE7UUFBcEMsaUJBV0M7UUFWRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxLQUFLLENBQUM7YUFDdEQsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQzthQUM1QixPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxFQUFaLENBQVksQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBTyxNQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQzthQUN2QyxPQUFPLEVBQUU7YUFDVCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxpQ0FBVSxHQUFqQixVQUFrQixJQUFtQjtRQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLGFBQWE7WUFDcEIsT0FBTyxFQUFFLDZCQUE2QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hELFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBUSxDQUFDO0tBQ3hCLENBQUM7cUNBS21DLFdBQUksRUFBb0IsbUJBQVE7R0FKeEQsWUFBWSxDQWdEeEI7QUFoRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQge0RhdGFiYXNlfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBwb2tlbW9uOiBBcnJheTxhbnk+O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2UpIHtcbiAgICAgICAgdGhpcy5wb2tlbW9uID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5leGVjdXRlUXVlcnkoXCJwb2tlbW9uXCIpO1xuICAgICAgICBpZiAocm93cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MVwiKVxuICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAgICAgLmZsYXRNYXAocmVzdWx0ID0+IHJlc3VsdC5yZXN1bHRzKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5nZXREYXRhYmFzZSgpLmNyZWF0ZURvY3VtZW50KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9rZW1vbi5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZW1vbi5wdXNoKHJvd3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dJbmZvcm1hdGlvbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vXCIgKyBpbmRleClcbiAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAuZmxhdE1hcChyZXN1bHQgPT4gcmVzdWx0LnR5cGVzKVxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gKDxhbnk+IHJlc3VsdCkudHlwZS5uYW1lKVxuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dEaWFsb2coZGF0YTogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoaXMgUG9rZW1vbiBpcyBvZiB0eXBlKHMpIFwiICsgZGF0YS5qb2luKFwiLCBcIiksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==