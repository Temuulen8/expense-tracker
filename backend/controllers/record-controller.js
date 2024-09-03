const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM record`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET RECORD", record: data });
};

const createRecord = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const data = await sql`
  INSERT INTO users(email, name, password, profile_img)
  VALUES(${email},${name}, ${password}, ${profile_img});
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "CREATED NEW USER", user: data });
};
const updateRecord = () => {};
const deleteRecord = () => {};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
