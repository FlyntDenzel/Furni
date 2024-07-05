// pages/api/upload.js
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to upload file' });
      return;
    }

    const oldPath = files.file.path;
    const newPath = path.join(form.uploadDir, files.file.name);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to save file' });
        return;
      }

      res.status(200).json({ filePath: `/uploads/${files.file.name}` });
    });
  });
}
