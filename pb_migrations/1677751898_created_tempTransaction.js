migrate((db) => {
  const collection = new Collection({
    "id": "01imlciu1czzgjr",
    "created": "2023-03-02 10:11:38.630Z",
    "updated": "2023-03-02 10:11:38.630Z",
    "name": "tempTransaction",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x0sohgwu",
        "name": "type",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fm4xdqbv",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7saevan2",
        "name": "amount",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("01imlciu1czzgjr");

  return dao.deleteCollection(collection);
})
