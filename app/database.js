"use strict";
var nativescript_couchbase_1 = require("nativescript-couchbase");
var Database = (function () {
    function Database() {
        this.db = new nativescript_couchbase_1.Couchbase("db");
        this.db.createView("pokemon", "1", function (document, emitter) {
            emitter.emit(document._id, document);
        });
    }
    Database.prototype.getDatabase = function () {
        return this.db;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQWlEO0FBRWpEO0lBSUk7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksa0NBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQUMsUUFBUSxFQUFFLE9BQU87WUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhCQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb3VjaGJhc2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1jb3VjaGJhc2UnO1xuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuXG4gICAgcHJpdmF0ZSBkYjogYW55O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRiID0gbmV3IENvdWNoYmFzZShcImRiXCIpO1xuICAgICAgICB0aGlzLmRiLmNyZWF0ZVZpZXcoXCJwb2tlbW9uXCIsIFwiMVwiLCAoZG9jdW1lbnQsIGVtaXR0ZXIpID0+IHtcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGFiYXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYjtcbiAgICB9XG5cbn0iXX0=