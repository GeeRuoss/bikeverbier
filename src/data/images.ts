// Inventaire images (cf. IMAGES.md).
// ⚠ TEMPORAIRE : on pointe le CDN Framer pour avoir un visuel tout de suite.
// À remplacer par les originaux HD (WebP + srcset) servis depuis /public — voir IMAGES.md.
const framer = (id: string) => `https://framerusercontent.com/images/${id}`;

export const IMG = {
  // Accueil
  heroHome: framer('dipvhd0ZpczIH5QEyvHDxI1lDME.jpg'),
  cardEntreprise: framer('J7Fl56Pxct9tqMf8pwTfObveTgA.jpg'),
  cardGuide: framer('SO9L2g9tvMFHPGzlNWsVmn7Tc.jpg'),
  cardSemaine: framer('ioR8bKK7RSfZqjiz3m9vRTX4vzs.jpg'),
  cardNepal: framer('kLLIJAJ96l3guqejmgNYPBwBMM.jpg'),
  welcome: framer('uvhPTgASQYRvaT3DS75MvL0ow.jpg'),
  ogHome: framer('VmZCJkcZrWU6fjIk0c7TPmNeEiM.jpg'),

  // Guide privé
  heroGuide: framer('6k7ZMm0IGdqLiAkfQbKrOkOYSM.jpg'),
  guideVideos: framer('eNIDRVnLPdjGZ3D0KgjZ45kr4ZU.jpg'),

  // Entreprise
  heroEntreprise: framer('b3eYJxnSISxgNNWI07NsrJ3KI4.jpg'),
  contactVisual: framer('QOUPDJeY3cE3wMkmlY64CoHIBxY.png'),

  // Semaine + chalet
  heroSemaine: framer('F3AjQSAmzLZ6tHtoWjWCYWp5aw.jpg'),
  semaineChalet: framer('qzi9VJDDC9udO3UkHE3Xj4KZ61E.jpg'),
  semaineLift: framer('q0qjI1IWFj6xqUz7Hr294Yxtzg.jpg'),

  // Nepal
  heroNepal: framer('kLLIJAJ96l3guqejmgNYPBwBMM.jpg'),
  nepalMustang: framer('3ApUpsB0s2YVqS78oFApDG3qIU.jpg'),
  nepalDays: framer('8RqlWuqNKHjHsyKd1q60CFQwVk.png'),
  nepalShuttle: framer('OgvadCrXRjMjl1CO3iA8KhPo2w.png'),
  ogNepal: framer('p6CtQFZmQ56R4OA2GLVc2tlcx6k.jpg'),

  // Contact (guides)
  guideGuillermo: framer('uvhPTgASQYRvaT3DS75MvL0ow.jpg'),
  guideJoshua: framer('PynoT1fkgruv9NzKmhlwoc8OMY.jpeg'),
  guideGilles: framer('K3FNFkwvWASIzyxLq9yRExPMM.jpeg'),

  // OG par défaut
  ogDefault: framer('l0eD4PCp2VAmzmeruvXBOB7Ukb0.png'),
} as const;
