export const trending = (req, res) => res.send("Homepage Videos");
export const see = (req, res) => {
  console.log(req.params);
  res.send("Watch");
};
export const search = (req, res) => res.send("search");
export const edit = (req, res) => res.send("edit");
export const deleteVideo = (req, res) => res.send("delete");
export const upload = (req, res) => res.send("upload");
