const DATA_GRAFICA = [
  { fecha: 'Enero', cantidad: 300, municipio: "Municipio 1" },
  { fecha: 'Febrero', cantidad: 280, municipio: "Municipio 2" },
  { fecha: 'Marzo', cantidad: 350, municipio: "Municipio 3" },
  { fecha: 'Abril', cantidad: 270, municipio: "Municipio 4" },
  { fecha: 'Mayo', cantidad: 320, locacion: "Municipio 5" },
  { fecha: 'Junio', cantidad: 400, municipio: "Municipio 6" },
  { fecha: 'Julio', cantidad: 450, municipio: "Municipio 7" },
  { fecha: 'Agosto', cantidad: 500, municipio: "Municipio 8" },
  { fecha: 'Septiembre', cantidad: 460, municipio: "Municipio 9" },
  { fecha: 'Octubre', cantidad: 400, municipio: "Municipio 10" },
  { fecha: 'Noviembre', cantidad: 320, municipio: "Municipio 11" },
  { fecha: 'Diciembre', cantidad: 280, municipio: "Municipio 12" },
];


const PROBLEMATIC_DATA = {
  "message": "Texto de analisis generado por openai de ejemplo .. y este texto: string fue pasado desde el cliente",
  "visual": [
    {
      "char_type": "bar",
      "data": {
        "title": "Titulo de Bar char generado por ia",
        "explanation": "Explicacion del grafico generado por ia",
        "problematic": [
          {
            "date": "Enero",
            "quantity": 234.0,
            "locality": "Santa Cruz"
          },
          {
            "date": "Enero",
            "quantity": 234.0,
            "locality": "Santa Cruz"
          }
        ]
      }
    },
    {
      "char_type": "pie",
      "data": {
        "title": "Titulo de Pie  char generado por ia",
        "explanation": "Explicacion del grafico generado por ia",
        "problematic": [
          {
            "date": "Enero",
            "quantity": 234.0,
            "locality": "Santa Cruz"
          },
          {
            "date": "Enero",
            "quantity": 234.0,
            "locality": "Santa Cruz"
          }
        ]
      }
    }
  ]
}

export { DATA_GRAFICA };