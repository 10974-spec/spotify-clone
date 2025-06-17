import { Router } from "express";
import { createAlbum, createSong, deleteAlbum, deleteSong} from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/songs", protectRoute, requireAdmin, createSong);
router.post("/albums", protectRoute, requireAdmin, createAlbum);

router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong );
router.delete("/albums/:id", protectRoute, requireAdmin, deleteAlbum );




export default router;


