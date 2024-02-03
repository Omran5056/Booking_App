import express from "express";
import {createRoom, getRooms, getRoom, updateRoom, deleteRoom, updateRoomAvailability} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


router.route("/").get(getRooms)
router.route("/:hotelid").post(verifyAdmin, createRoom)

router.route("/:id").get(getRoom).put(verifyAdmin, updateRoom)
router.route("/:id/:hotelid").delete(verifyAdmin,deleteRoom)

router.put("/availability/:id", updateRoomAvailability);


export default router