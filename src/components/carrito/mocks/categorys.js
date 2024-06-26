export const dataCategories = [
  {
    groupTitle: "minPrice",
    filters: [
      {
        filtro: "minPrice",
        title: "Elije un precio...",
        search: "Buscar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "0", label: "0" },
          { value: "10", label: "10" },
          { value: "15", label: "15" },
          { value: "20", label: "20" },
          { value: "25", label: "25" },
          { value: "30", label: "30" },
          { value: "35", label: "35" },
          { value: "40", label: "40" },
          { value: "45", label: "45" }
        ]
      },
    ]
  }, {
    groupTitle: "clasificar",
    filters: [
      {
        filtro: "clasificar",
        title: "Clasifica por...",
        search: "Clasificar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "all", label: "Todos" },
          { value: "nuevo", label: "Nuevo" },
          { value: "popular", label: "Popular" },
          { value: "descuento", label: "Descuento" },
        ]
      },
    ]
  }, {
    groupTitle: "talla",
    filters: [
      {
        filtro: "talla",
        title: "Talla desde la...",
        search: "Clasificar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "0", label: "# 0" },
          { value: "32", label: "# 32" },
          { value: "33", label: "# 33" },
          { value: "34", label: "# 34" },
          { value: "35", label: "# 35" },
          { value: "36", label: "# 36" },
          { value: "37", label: "# 37" },
          { value: "38", label: "# 38" },
          { value: "39", label: "# 39" },
          { value: "40", label: "# 40" },
        ]
      },
    ]
  }, {
    groupTitle: "estilo",
    filters: [
      {
        filtro: "estilo",
        title: "Estilo por...",
        search: "Clasificar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "all", label: "Todos" },
          { value: "tacon", label: "Tacon" },
          { value: "correaTobillo", label: "Correa al tobillo" },
          { value: "plataforma", label: "Plataforma" },
          { value: "correaTrasera", label: "Correa trasera" },
          { value: "salon", label: "De salón" },
          { value: "bailarinas", label: "Bailarinas" },
          { value: "botines", label: "Botines" },
          { value: "plano", label: "Plano" },
        ]
      },
    ]
  }, {
    groupTitle: "color",
    filters: [
      {
        filtro: "color",
        title: "Color por...",
        search: "Clasificar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "all", label: "Todos" },
          { value: "#FF0000", label: "Rojo" },
          { value: "#0000FF", label: "Azul" },         
          { value: "#00FF00", label: "Verde" },        
          { value: "#FFFF00", label: "Amarillo" },     
          { value: "#000000", label: "Negro" },        
          { value: "#FFFFFF", label: "Blanco" },       
          { value: "#FFC0CB", label: "Rosa" },        
          { value: "#800080", label: "Morado" },       
          { value: "#808080", label: "Gris" },         
          { value: "#8B4513", label: "Marrón" }        
        ]
      },
    ]
  }, {
    groupTitle: "tipo",
    filters: [
      {
        filtro: "tipo",
        title: "Elije que tipo...",
        search: "Clasificar por...",
        notEmpty: "No hay resultados",
        options: [
          { value: "all", label: "Todos" },
          { value: "sandalias", label: "Sandalias" },
          { value: "zapatos", label: "Zapatos" },
          { value: "Botas", label: "Botas" },
        ]
      },
    ]
  },
];