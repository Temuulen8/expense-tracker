const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM category`;
  console.log("DATA", data);
  res.status(200).json({ message: "GET category", category: data });
};

const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  console.log(req.body);
  const data = await sql`
  INSERT INTO category(name, description, category_image)
  VALUES(${name}, ${description}, ${category_image});
  `;
  console.log("DATA", data);
  res.status(200).json({ message: "CREATED NEW category", category: data });
};
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_image } = req.body;
  console.log(req.params);

  const data =
    await sql`UPDATE category SET name=${name}, description=${description}, category_image=${category_image} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "updated category", category: data });
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM category WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete category", category: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
