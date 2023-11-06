import sharp from 'sharp';
import axios from 'axios';

const input = (await axios({ url: "https://cdn4.iconfinder.com/data/icons/valorant-jett-and-killjoy-cute-chibi/2000/valorant_chibi_killjoy_jettvalorant_cute_jettcute_killjoycute-05-512.png", responseType: "arraybuffer" })).data;
const composite = (await axios({ url: "https://img.freepik.com/fotos-premium/fundo-e-papel-de-parede-da-arte-grafica-da-ilustracao-abstrata-do-gradiente-azul-escuro-e-violeta_34056-954.jpg?w=740", responseType: "arraybuffer" })).data;

var compositeImage = sharp(composite)
  .composite([
    {
      input: input,
      gravity: 'southwest'
    }
    ]);

compositeImage.toFile('output.png')
