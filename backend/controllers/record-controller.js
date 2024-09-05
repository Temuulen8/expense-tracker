const sql = require("../config/db");

const getTransaction = async (req, res) => {
  const data = await sql`SELECT * FROM record WHERE uid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET TRANSACTION", record: data });
};

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM record`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET RECORD", record: data });
};

const createRecord = async (req, res) => {
  const { name, amount, description } = req.body;
  const data = await sql`
  INSERT INTO record( name, amount, description)
  VALUES(${name}, ${amount},  ${description});
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "CREATED NEW record", record: data });
};
const updateRecord = async (req, res) => {
  const { id } = req.params; // request, res response
  const { name, amount } = req.body;

  const data =
    await sql`UPDATE record SET name=${name}, amount=${amount} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "updated record", record: data });
};
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM record WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete record", record: data });
};

module.exports = {
  getTransaction,
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
