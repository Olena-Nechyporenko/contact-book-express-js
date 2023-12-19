const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts");
const { isValidId, isEmptyBody } = require("../../middlewares/index");
const { validateBody } = require("../../decorators/index");
const {
  contactSchema,
  updateFavoriteSchema,
} = require("../../schemas/contact-schemas");

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactSchema),
  contactsController.addContact
);

router.delete("/:contactId", isValidId, contactsController.deleteContact);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactSchema),
  isValidId,
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  contactsController.updateStatusContact
);

module.exports = router;
