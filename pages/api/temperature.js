// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    const { temperature } = req.body;
    console.log(temperature);

    res.status(200).json({ message: "done" });
  } catch (error) {
    console.log(error);
  }
}
