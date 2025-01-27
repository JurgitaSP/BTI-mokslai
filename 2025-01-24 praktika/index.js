const mokytojuAlgos = Array.from({ length: 100 }, () => rand(500, 1100));
console.log(`Mokytoju atlyginimai ${mokytojuAlgos}`);
let minimaliAlga = [];
let minimalke = 600;
let virsMinimalkes = 800;
let vidutineMinimalke = 1100;
function maziauUz(mokytojuAlgos, minimalke) {
  for (let i = 0; i <= mokytojuAlgos.length; i++) {
    if (mokytojuAlgos[i] < minimalke) {
      minimaliAlga.push(mokytojuAlgos[i]);
    }
  }
  return minimaliAlga;
}
console.log(maziauUz(mokytojuAlgos, minimalke));
 
let daugiauUzMinimuma = [];
function perViduri(mokytojuAlgos, virsMinimalkes) {
  for (let i = 0; i <= mokytojuAlgos.length; i++) {
    if (mokytojuAlgos[i] < virsMinimalkes && mokytojuAlgos[i] > minimalke) {
      daugiauUzMinimuma.push(mokytojuAlgos[i]);
    }
  }
  return daugiauUzMinimuma;
}
console.log(perViduri(mokytojuAlgos, virsMinimalkes));
 
let vistiekMazai = [];
function gailaMokytoju(mokytojuAlgos, vidutineMinimalke) {
  for (let i = 0; i <= mokytojuAlgos.length; i++) {
    if (
      mokytojuAlgos[i] < vidutineMinimalke &&
      mokytojuAlgos[i] > virsMinimalkes
    ) {
      vistiekMazai.push(mokytojuAlgos[i]);
    }
  }
  return vistiekMazai;
}
console.log(gailaMokytoju(mokytojuAlgos, vidutineMinimalke));
 
function didziausiasKiekisMokytojuPagalAlgas(
  vistiekMazai,
  daugiauUzMinimuma,
  minimaliAlga
) {
  if (
    vistiekMazai.length >= daugiauUzMinimuma.length &&
    vistiekMazai.length >= minimaliAlga.length
  ) {
    return `Daugiausiai mokytoju  gauna didziausias algas ${vistiekMazai.length}`;
  } else if (
    daugiauUzMinimuma.length >= vistiekMazai.length &&
    daugiauUzMinimuma.length >= minimaliAlga.length
  ) {
    return `Daugiausiai mokytoju  gauna vidutines algas ${daugiauUzMinimuma.length}`;
  } else {
    return `Daugiausiai mokytoju  gauna apgailetinas algas ${minimaliAlga.length}`;
  }
}
console.log(
  didziausiasKiekisMokytojuPagalAlgas(
    vistiekMazai,
    daugiauUzMinimuma,
    minimaliAlga
  )
);
 
 