export default async function handler(req, res) {
  try {
    res.status(200).json({ temprature: 456 });
  } catch (error) {
    console.log(error);
  }
}
