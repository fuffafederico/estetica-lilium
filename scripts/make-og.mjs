// Genera public/images/og.jpg (1200x630) dal logo e dalla fotografia originali.
// Uso: node scripts/make-og.mjs
import sharp from 'sharp';

const W = 1200;
const H = 630;
const half = W / 2;

const photo = await sharp('src/assets/images/trattamento-viso.jpg')
  .resize(half, H, { fit: 'cover', position: 'left' })
  .toBuffer();

const logo = await sharp('src/assets/images/logo.png').resize({ width: 380 }).toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp({ create: { width: W, height: H, channels: 3, background: '#FBEDEC' } })
  .composite([
    { input: photo, left: half, top: 0 },
    { input: logo, left: Math.round((half - logoMeta.width) / 2), top: Math.round((H - logoMeta.height) / 2) },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/images/og.jpg');

console.log('og.jpg creata');
