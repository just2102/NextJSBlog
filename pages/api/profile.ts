import { NextApiRequest, NextApiResponse } from "next";

const profileData = {
  name: "Ilia",
  age: 23,
  occupation: "Fullstack developer",
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case "POST":
      res.status(200).json({ message: "Posted data: " + body });
    case "GET":
      res.status(200).json({ profile: profileData });
  }
};
