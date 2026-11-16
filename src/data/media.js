const base = import.meta.env.BASE_URL;
const img = (f) => `${base}assets/media/${f}`;
const vid = (f) => `${base}assets/video/${f}`;

export const images = {
  hero: img('8ce74f24a893ad57e72df981ec0e6fe0.png'),
  contactBg: img('8c14f284e17ecc167ca589e343beb77b.png'),
};

export const reels = {
  stranger: { src: vid('bc5589ab15dceb9248ebbff165b85015.mp4'), poster: vid('f5f8992272ca6542300ed68875b16cf9.jpg') },
  vox1: { src: vid('2dc6c74ced87b1b21c5da735a180d5ac.mp4'), poster: vid('22882f0cec77b730e081faf6b6f0151c.jpg') },
  vox2: { src: vid('7e057582f199400a426acc9cb14f67c6.mp4'), poster: vid('4f00c9f2ce7e5471ffb035212f0989d4.jpg') },
  vox3: { src: vid('31b98e504a0c14ed3226c8e5642d9b28.mp4'), poster: vid('c1b6290efe1e2a0e090d4fc1c84a720d.jpg') },
  about: { src: vid('fec3ed6b21fee132bdddc74529f07b32.mp4'), poster: vid('43b36b2de878cf64db7f222c3ec180a5.jpg') },
  street1: { src: vid('5e057b1e71309c51f16c25aeac9e0a7e.mp4'), poster: vid('b38dc58be6c65cb80216bdb4bf95d112.jpg') },
  street2: { src: vid('0c49c14adcc5be6d0b85430f2130c8c8.mp4'), poster: vid('ab4a07740c678c63106ac9781c7e9a45.jpg') },
  street3: { src: vid('dd8d589e3ed24ca2295dae4a00e9a9b5.mp4'), poster: vid('cb012098f31ccd0d8992eded997e45e7.jpg') },
  street4: { src: vid('4e2843bd7291df678f5c3da54b715e51.mp4'), poster: vid('b83979a88fd6da139305e1fa4259e1e7.jpg') },
  idea: { src: vid('83134db3fa33b9d33f11c47540b104f3.mp4'), poster: vid('64cba7052f3c3660d689e3c8df16d812.jpg') },
  testimonial1: { src: vid('20cdce86c4ff16edb5914d65c0ac7927.mp4'), poster: vid('9c3c4e915cb01a357fcc97c9949ef234.jpg') },
  testimonial2: { src: vid('07edffe0cb6be7c2c37eb603222625f4.mp4'), poster: vid('6878f126c82345491df35835cc38f803.jpg') },
  story1: { src: vid('89249464424c350acdebe87b7c4efeb1.mp4'), poster: vid('050425bd18aac7f71f8b8d2da926555b.jpg') },
  story2: { src: vid('d344790323e9aa9fb724f7bb72dc7c5d.mp4'), poster: vid('f342e5b1af596b4c57a69715ccd8760d.jpg') },
};

// Brand logos, in the order and positions of the "Some good company" grid.
// crop is in 64x64 circle units (from the original Canva layout).
export const brands = [
  { name: 'Radisson Blu', x: 214.7, y: 373.3, src: img('7502d0888c4a1cc705fcc3a24ca894c6.png'), crop: { x: 0, y: 0, w: 64, h: 64 } },
  { name: 'The Kind', x: 404.7, y: 373.3, src: img('3374fc88448a06e99d0d0b1ed53875eb.png'), crop: { x: -3.593, y: -5.689, w: 72.683, h: 72.683 } },
  { name: 'Enlite', x: 594.5, y: 373.3, src: img('582503dd1bf8e2e61eef794ce79e06b7.png'), crop: { x: -4.791, y: -8.983, w: 76.576, h: 76.576 } },
  { name: 'Isak', x: 784.5, y: 373.3, src: img('2157a397e63fcacbe9e928fed36d16a2.png'), crop: { x: -18.404, y: -23.413, w: 102.061, h: 102.061 } },
  { name: "Maggie's Meals", x: 974.5, y: 373.3, src: img('3276f7fe66034902b092c0617f2fe3e3.png'), crop: { x: 0, y: 0, w: 64, h: 64 } },
  { name: 'Just Dogs', x: 1164.5, y: 373.3, src: img('3cd383a7d2cfb35c896d81abbfa43e4a.png'), crop: { x: 0, y: 0, w: 64, h: 64 } },
  { name: 'EZ Cook', x: 299.2, y: 530.4, src: img('4a32a6bd020d8aaf1e8a8344d7091ef9.png'), crop: { x: 0, y: -0.8, w: 64, h: 65.6 } },
  { name: 'Sandwich Poha', x: 482.2, y: 530.4, src: img('1df96d61e97ade05efd5a752aa59c7a2.png'), crop: { x: 0, y: 0, w: 64, h: 64 } },
  { name: 'Paper Boat', x: 665, y: 530.4, src: img('16aa13cd9e354674b06eb66bc57db868.png'), crop: { x: 0, y: 0, w: 64, h: 64 } },
  { name: 'Bath Alchemy', x: 848, y: 530.4, src: img('18d6746a2bd65e8e62b646c4bf8be293.png'), crop: { x: -13.191, y: 0, w: 90.383, h: 64 } },
  { name: 'Lluvia Bakery', x: 1031, y: 530.4, src: img('8f21dd32407bcab7fdcfd73feb176786.png'), crop: { x: 0, y: -8, w: 64, h: 80 } },
];
