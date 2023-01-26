// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: "POST",
    origin: "http://192.168.1.115/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  try {
    const { temperature } = req.body;
    console.log(temperature);

    res.status(200).json({ temperature: temperature });
  } catch (error) {
    console.log(error);
  }
}
