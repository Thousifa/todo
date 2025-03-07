import { Router } from "express";
import { getCategories, createCategory, deleteCategory } from "../controllers/categoryController";

const router = Router();
router.get("/", getCategories);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);

export default router;
