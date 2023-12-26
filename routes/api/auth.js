const express = require("express");
const { validateBody } = require("../../decorators/index");
const { registerSchema, loginSchema } = require("../../schemas/user-schemas");
const userController = require("../../controllers/auth");
const router = express.Router();

router.post("/register", validateBody(registerSchema), userController.register);

router.post("/login", validateBody(loginSchema), userController.login);

module.exports = router;
