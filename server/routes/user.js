const {Router} = require('express');


const router = Router();
const { handleUserSignup, handleUserLogin } = require("../controller/user");

router.post('/signup',handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
