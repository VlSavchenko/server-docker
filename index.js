
import express, { urlencoded } from 'express';
import multer, { memoryStorage } from 'multer';
import generatePDF from './project/generatePDF.js';

const app = express();
const port = 8089;
const upload = multer({ storage: memoryStorage() });
app.use(urlencoded({ extended: true }));

app.post('/generate-pdf', upload.single('photo'), async (req, res) => {
  const data = req.body;
  const photo = req.file;
  const pdfBuffer = await generatePDF(data, photo);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=CV.pdf`);
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});


