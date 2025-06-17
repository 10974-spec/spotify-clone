import { Router } from "express";
import { createAlbum, createSong, deleteAlbum, deleteSong, checkAdmin} from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);


router.get("/check",checkAdmin);

router.post("/songs",createSong);
router.post("/albums",createAlbum);

router.delete("/songs/:id",deleteSong );
router.delete("/albums/:id",deleteAlbum );

export default router;


