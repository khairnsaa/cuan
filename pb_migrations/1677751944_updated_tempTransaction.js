migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("01imlciu1czzgjr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yq68htqm",
    "name": "category",
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
  const collection = dao.findCollectionByNameOrId("01imlciu1czzgjr")

  // remove
  collection.schema.removeField("yq68htqm")

  return dao.saveCollection(collection)
})
