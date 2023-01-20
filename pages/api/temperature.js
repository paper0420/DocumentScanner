// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    const temp = JSON.parse(req.body);
    console.log("temp: " + temp);

    res.status(200).json({ message: "done" });
  } catch (error) {
    console.log(error);
  }
}
