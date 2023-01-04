import { readFileSync } from "fs";
import  path  from "path";
import express, { Request, Response } from 'express';

const PORT : number = 5000;
const app = express();

app.use(express.static(path.join(`${process.cwd()}/../client/dist/`)));
app.use(`*`, (req,res) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(path.join(`${process.cwd()}/../client/dist/`, 'index.html')))
})

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});