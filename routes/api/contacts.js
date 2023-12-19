const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const isValidId = require("../../middlewares/isValidId");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put("/:contactId", isValidId, ctrl.updateById);

router.patch("/:contactId/favorite", isValidId, ctrl.updateStatusContact);

module.exports = router;
