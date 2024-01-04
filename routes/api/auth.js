const express = require("express");
const multer = require("multer");
const path = require("path");
const { validateBody } = require("../../decorators/index");
const {
  registerSchema,
  loginSchema,
  updateSubscription,
} = require("../../schemas/user-schemas");
const userController = require("../../controllers/auth");
const { authenticate } = require("../../middlewares/index");
const router = express.Router();

const tempDir = path.join(__dirname, "../../temp");
const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: multerConfig,
});

router.post(
  "/register",
  upload.single("avatar"),
  validateBody(registerSchema),
  userController.register
);

router.post("/login", validateBody(loginSchema), userController.login);

router.get("/current", authenticate, userController.getCurrent);

router.post("/logout", authenticate, userController.logout);

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscription),
  userController.updateSubscription
);

module.exports = router;
