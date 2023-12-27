const express = require("express");
const { validateBody } = require("../../decorators/index");
const { registerSchema, loginSchema } = require("../../schemas/user-schemas");
const userController = require("../../controllers/auth");
const { authenticate } = require("../../middlewares/index");
const router = express.Router();

router.post("/register", validateBody(registerSchema), userController.register);

router.post("/login", validateBody(loginSchema), userController.login);

router.get("/current", authenticate, userController.getCurrent);
module.exports = router;
