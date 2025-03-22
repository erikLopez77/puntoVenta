const menuItems = [
  // Bebidas sin alcohol
  {
    nombre: "Jugo de Naranja",
    descripcion: "Jugo natural de naranja recién exprimido, servido en un vaso de 500 ml",
    precio: 35.00,
    categoriaId: 1
  },
  {
    nombre: "Agua de Jamaica",
    descripcion: "Agua fresca de jamaica con un toque de limón, servida en una jarra de 1 litro",
    precio: 30.00,
    categoriaId: 1
  },
  {
    nombre: "Batido de Fresa",
    descripcion: "Batido de fresa sin azúcar añadido, servido en un vaso de 500 ml",
    precio: 45.00,
    categoriaId: 1
  },
  {
    nombre: "Limonada",
    descripcion: "Limonada fresca con hojas de menta, servida en un vaso de 500 ml",
    precio: 35.00,
    categoriaId: 1
  },
  {
    nombre: "Té Helado",
    descripcion: "Té helado con rodajas de limón, servido en un vaso de 500 ml",
    precio: 30.00,
    categoriaId: 1
  },

  // Desayunos
  {
    nombre: "Huevos Rancheros",
    descripcion: "Huevos estrellados con salsa ranchera, frijoles refritos y 3 tortillas de maíz",
    precio: 80.00,
    categoriaId: 2
  },
  {
    nombre: "Panqueques",
    descripcion: "3 panqueques con miel, mantequilla y fruta fresca (plátano y fresas)",
    precio: 75.00,
    categoriaId: 2
  },
  {
    nombre: "Omelette de Queso",
    descripcion: "Omelette esponjoso con queso manchego, champiñones, espinacas y tomate, acompañado de 2 tortillas de harina",
    precio: 85.00,
    categoriaId: 2
  },
  {
    nombre: "Avena con Frutas",
    descripcion: "Avena caliente con manzana, plátano, nueces y un toque de canela, servida en un tazón mediano",
    precio: 60.00,
    categoriaId: 2
  },
  {
    nombre: "Tostadas Francesas",
    descripcion: "3 tostadas francesas con sirope de maple, fresas y crema batida",
    precio: 90.00,
    categoriaId: 2
  },

  // Pastas (o Sopa/Pasta)
  {
    nombre: "Spaghetti a la Boloñesa",
    descripcion: "Spaghetti con salsa boloñesa casera, albahaca y queso parmesano rallado, servido en un plato hondo",
    precio: 120.00,
    categoriaId: 3
  },
  {
    nombre: "Lasaña",
    descripcion: "Lasaña de carne molida, queso mozzarella y salsa de tomate, gratinada al horno, servida en un plato grande",
    precio: 130.00,
    categoriaId: 3
  },
  {
    nombre: "Sopa de Fideos",
    descripcion: "Sopa de fideos con vegetales (zanahoria, calabaza y chayote) y trozos de pollo, servida en un plato hondo",
    precio: 90.00,
    categoriaId: 3
  },
  {
    nombre: "Pasta Alfredo",
    descripcion: "Pasta con una cremosa salsa Alfredo, champiñones y pollo, servida en un plato hondo",
    precio: 110.00,
    categoriaId: 3
  },
  {
    nombre: "Ravioles de Ricota",
    descripcion: "Ravioles rellenos de ricota y espinacas, bañados en salsa de tomate y queso parmesano, servidos en un plato hondo",
    precio: 120.00,
    categoriaId: 3
  },

  // Platos Fuertes
  {
    nombre: "Pollo a la Parrilla",
    descripcion: "Pechuga de pollo a la parrilla acompañada de papas asadas, ensalada verde y arroz blanco, servido en un plato grande",
    precio: 150.00,
    categoriaId: 4
  },
  {
    nombre: "Carne Asada",
    descripcion: "Corte de res asado al estilo tradicional, acompañado de vegetales salteados, frijoles charros y guacamole, servido en un plato grande",
    precio: 180.00,
    categoriaId: 4
  },
  {
    nombre: "Pescado Frito",
    descripcion: "Filete de pescado frito, servido con salsa tártara, arroz blanco y ensalada de repollo, servido en un plato grande",
    precio: 140.00,
    categoriaId: 4
  },
  {
    nombre: "Enchiladas de Pollo",
    descripcion: "3 enchiladas rellenas de pollo desmenuzado, bañadas en salsa roja y gratinadas con queso, acompañadas de frijoles refritos y crema",
    precio: 120.00,
    categoriaId: 4
  },
  {
    nombre: "Tacos al Pastor",
    descripcion: "3 tacos al pastor con piña, cebolla y cilantro, acompañados de salsa verde y limón, servidos en un plato",
    precio: 90.00,
    categoriaId: 4
  },

  // Postres
  {
    nombre: "Helado de Vainilla",
    descripcion: "2 bolas de helado de vainilla con trozos de chocolate, servidas en un plato pequeño",
    precio: 50.00,
    categoriaId: 5
  },
  {
    nombre: "Pastel de Chocolate",
    descripcion: "Rebanada de pastel de chocolate con cobertura de ganache y nueces, servida en un plato pequeño",
    precio: 70.00,
    categoriaId: 5
  },
  {
    nombre: "Flan de Caramelo",
    descripcion: "Flan casero bañado en salsa de caramelo, servido en un plato pequeño",
    precio: 60.00,
    categoriaId: 5
  },
  {
    nombre: "Tiramisú",
    descripcion: "Porción de tiramisú italiano con café y mascarpone, servido en un plato pequeño",
    precio: 80.00,
    categoriaId: 5
  },
  {
    nombre: "Cheesecake de Fresa",
    descripcion: "Rebanada de cheesecake cremoso con coulis de fresa, servida en un plato pequeño",
    precio: 70.00,
    categoriaId: 5
  }
];

export default menuItems;