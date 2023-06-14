import play from "../assets/img/icons/play.png";
import mascotas from "../assets/img/icons/mascotas.png";
import computer from "../assets/img/icons/computer.png";
import audio from "../assets/img/icons/audio.png";
import belleza from "../assets/img/icons/belleza.png";
import world from "../assets/img/icons/world.png";
import love from "../assets/img/icons/love.png";

export const arrayCategorias = [
  {
    categoria: "Gamer",
    img: play,
    productos: [
      {
        nombre: "Consola",
        marca: "Sony",
        precio: 499.99,
      },
      {
        nombre: "Controlador",
        marca: "Microsoft",
        precio: 59.99,
      },
    ],
  },
  {
    categoria: "Mascotas",
    img: mascotas,
    productos: [
      {
        nombre: "Perro",
        marca: "N/A",
        precio: 0.0,
      },
      {
        nombre: "Gato",
        marca: "N/A",
        precio: 0.0,
      },
    ],
  },
  {
    categoria: "Computo",
    img: computer,
    productos: [
      {
        nombre: "Laptop",
        marca: "HP",
        precio: 899.99,
      },
      {
        nombre: "Teclado",
        marca: "Logitech",
        precio: 29.99,
      },
    ],
  },
  {
    categoria: "Audio",
    img: audio,
    productos: [
      {
        nombre: "Auriculares",
        marca: "Sony",
        precio: 99.99,
      },
      {
        nombre: "Altavoces",
        marca: "JBL",
        precio: 149.99,
      },
    ],
  },
  {
    categoria: "Belleza",
    img: belleza,
    productos: [
      {
        nombre: "Maquillaje",
        marca: "Maybelline",
        precio: 9.99,
      },
      {
        nombre: "Cepillo de pelo",
        marca: "Tangle Teezer",
        precio: 14.99,
      },
    ],
  },
  {
    categoria: "Mundo",
    img: world,
    productos: [
      {
        nombre: "Mapa",
        marca: "N/A",
        precio: 9.99,
      },
      {
        nombre: "Globo terráqueo",
        marca: "N/A",
        precio: 19.99,
      },
    ],
  },
  {
    categoria: "Love",
    img: love,
    productos: [
      {
        nombre: "Anillo",
        marca: "Tiffany & Co.",
        precio: 999.99,
      },
      {
        nombre: "Tarjeta de amor",
        marca: "Hallmark",
        precio: 4.99,
      },
    ],
  },
];
