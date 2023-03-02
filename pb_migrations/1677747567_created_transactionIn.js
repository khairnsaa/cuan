migrate((db) => {
  const collection = new Collection({
    "id": "wvjyidyvw9kj9cb",
    "created": "2023-03-02 08:59:27.628Z",
    "updated": "2023-03-02 08:59:27.628Z",
    "name": "transactionIn",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qak2gldx",
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
        "id": "4uknnvcs",
        "name": "budgets",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvjyidyvw9kj9cb");

  return dao.deleteCollection(collection);
})
