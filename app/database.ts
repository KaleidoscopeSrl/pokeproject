import {Couchbase} from 'nativescript-couchbase';

export class Database {

    private db: any;

    public constructor() {
        this.db = new Couchbase("db");
        this.db.createView("pokemon", "1", (document, emitter) => {
            emitter.emit(document._id, document);
        });
    }

    public getDatabase() {
        return this.db;
    }

}