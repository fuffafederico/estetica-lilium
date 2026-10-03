// Ricava dalla fotografia originale il ritaglio usato nella hero (src/assets/images/).
// Uso: node scripts/prepare-photos.mjs
import sharp from 'sharp';

await sharp('src/assets/images/originale/hero-originale.jpg') // 1900 × 1632
  .extract({ left: 0, top: 0, width: 1306, height: 1632 }) // ritratto: viso e mani
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile('src/assets/images/trattamento-viso.jpg');
console.log('creato trattamento-viso.jpg');
