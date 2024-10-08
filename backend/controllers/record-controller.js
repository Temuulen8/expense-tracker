const sql = require("../config/db");

const getChartData = async (req, res) => {
  try {
    const donutChartData = await sql`
    SELECT TO_CHAR(DATE_TRUNC('month', r.createdat), 'Mon') as sar,
    SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
    SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_Inc
    FROM record r
    GROUP BY DATE_TRUNC('month' , r.createdat)
    ORDER BY DATE_TRUNC('month' , r.createdat);`;
    res.status(200).json({ message: "success", donut: donutChartData });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM (amount) FROM record GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const getAllRecord = async (req, res) => {
  try {
    const info = await sql`SELECT * FROM record`;
    res.status(200).json({ info });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
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
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
};
