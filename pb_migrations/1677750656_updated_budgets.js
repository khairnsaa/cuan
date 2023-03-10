migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gxn6502radqa4y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zeiog8pq",
    "name": "amount",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gxn6502radqa4y")

  // remove
  collection.schema.removeField("zeiog8pq")

  return dao.saveCollection(collection)
})
