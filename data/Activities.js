const activities= [
    {
      "id": 1,
      "ContactType": "Llamada",
      "ContactDate": "2024-11-03",
      "Client": [
        { "name": "Miguel" },
        { "name": "Maria" }
      ],
      "ContactUser": "Juan Pérez",
      "Description": "Seguimiento de actividad comercial"
    },
    {
        "id": 2,
        "ContactType": "Correo",
        "ContactDate": "2024-11-04",
        "Client": [
          { "name": "Ana" },
          { "name": "Carlos" }
        ],
        "ContactUser": "Laura Gómez",
        "Description": "Envío de propuesta comercial"
      },{
        "id": 3,
        "ContactType": "Reunión Presencial",
        "ContactDate": "2024-11-05",
        "Client": [
          { "name": "Javier" },
          { "name": "Sofía" }
        ],
        "ContactUser": "Luis Torres",
        "Description": "Presentación de producto"
      },
      {
        "id": 4,
        "ContactType": "Llamada",
        "ContactDate": "2024-11-06",
        "Client": [
          { "name": "Elena" },
          {"name":"Enrique"},
          {"name":"Mike"},
          {"name":"Luisa"},
          {"name":"Julio"}
        ],
        "ContactUser": "Carlos Ruiz",
        "Description": "Demostración de características"
      }
      
      
      
  ]

  module.exports = activities;