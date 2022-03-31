import cats from "../../data/cats.json";

export default function listCats(req, res) {
  console.log("Request", req.query);

  const result = cats.filter((item) =>
    item.name.toLowerCase().includes(req.query.search.toLowerCase())
  );

  res.send(result);
}
