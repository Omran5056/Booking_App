import express from "express";
import {createHotel, getHotels, getHotel, updateHotel, deleteHotel, countByCity, countByType, getHotelRooms} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


router.post("/",verifyAdmin, createHotel)

router.route("/find/:id").get(getHotel).put(verifyAdmin, updateHotel).delete(verifyAdmin,deleteHotel)

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router