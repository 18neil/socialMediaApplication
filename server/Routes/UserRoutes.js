import express from "express";
import { getUser, updateUser, deletUser } from "../Controllers/UserContriller.js";


const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deletUser)


export default router;