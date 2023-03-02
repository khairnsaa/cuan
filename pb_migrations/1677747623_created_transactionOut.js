migrate((db) => {
  const collection = new Collection({
    "id": "y3awjnfmz6q2r60",
    "created": "2023-03-02 09:00:23.373Z",
    "updated": "2023-03-02 09:00:23.373Z",
    "name": "transactionOut",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nam3iimf",
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
        "id": "oyfrgbde",
        "name": "amount",
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
        "id": "hmsviial",
        "name": "category",
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
  const collection = dao.findCollectionByNameOrId("y3awjnfmz6q2r60");

  return dao.deleteCollection(collection);
})
