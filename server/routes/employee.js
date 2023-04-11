const { Router } = require("express");
const { getStaff, getEmp, getEmpRole, onboarding, getRooms, setRooms, addRenting, transferR, setBooking, addChain, removeChain, getHotels, removeHotel, allchains, getChains, removeRoom, setManager, addRoom, setRenting, addHotel, getBooking, getAllBooking, getAllRenting } = require("../controllers/employ");
const router = Router();
const {
  empgetUsers,
  empregister,
  emplogin,
  empprotected,
  emplogout,
} = require("../controllers/auth");
const { emploginValidation, onboardingValidation } = require("./auth_validators");
const { validationMiddleware } = require("../middleware/validate-middleware");
const { userAuth } = require("../middleware/auth-middleware");

router.get("/get-users", empgetUsers);
router.post("/register", onboardingValidation, validationMiddleware, empregister);
router.post("/login", emploginValidation, validationMiddleware, emplogin);
router.get("/protected", userAuth, empprotected);
router.get("/logout", emplogout);



router.get("/get-staff/:id", getStaff);
router.get("/get-emp/:id", getEmp);
router.get("/get-emp/role/:id", getEmpRole);
router.post("/onboarding/:id", onboarding);


router.delete("/remove/room/:id",removeRoom)
router.get("/get-room/:id", getRooms);
router.post("/add-room/:id", addRoom);
router.put("/set-room/:id", setRooms);


router.post("/transfer-booking", transferR);
router.post("/add-rent", addRenting);
router.get("/get-all-booking/:id", getAllBooking);
router.get("/get-all-renting/:id", getAllRenting);
router.get("/get-booking/:id", getBooking)
router.put("/set-renting/:id", setRenting);
router.put("/set-booking/:id", setBooking);

router.get("/get-chains", getChains);
router.post("/add-chain", addChain);
router.delete("/remove-chain/:id", removeChain);

router.get("/get-hotels/:id",getHotels);
router.post("/add-hotel", addHotel);
router.delete("/remove-hotel/:id", removeHotel);

router.put("/manager-update/:id", setManager )


module.exports = router;
