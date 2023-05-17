const express = require("express")
const router = express.Router()
const registerController = require("../controllers/registerController")

router.post("/register", async (req, res) => {
  await registerController.addNewUser(req, res)
})

router.get("/register", (req, res) => {
  registerController.getAllUsers(req, res)
})

router.get("/register/:userId", (req, res) => {
  registerController.getUserById(req, res)
})

router.put("/register/:id", async (req, res) => {
  await registerController.updateUserInfoById(req, res)
})

router.delete("/register/:userId", (req, res) => {
  registerController.deleteUserById(req, res)
})

router.post("/login", async (req, res) => {
  await registerController.adduserRegisteralready(req, res)
})

router.patch("/logout/:_id", async (req, res) => {
  await registerController.deleteUser(req, res)
})

module.exports = router
