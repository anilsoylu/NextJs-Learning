// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: "Pizza", price: 2 },
    { name: "Hamburger", price: 4 },
  ])
}
