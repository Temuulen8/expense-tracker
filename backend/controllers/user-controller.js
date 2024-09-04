const sql = require("../config/db");

const currentUser = async (req, res) => {
  const user = req.user;
  const [data] = await sql`SELECT * FROM users WHERE id=${user.id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET USER", user: data });
};

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET USER", user: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const data = await sql`
  INSERT INTO users(email, name, password, profile_img)
  VALUES(${email},${name}, ${password}, ${profile_img});
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "CREATED NEW USER", user: data });
};
const updateUser = async (req, res) => {
  const { id } = req.params; // request, res response
  const { email, name, password, profile_img } = req.body;

  const data =
    await sql`UPDATE users SET email=${email}, name=${name}, password=${password} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "updated user", user: data });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM users WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete user", user: data });
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  currentUser,
};
