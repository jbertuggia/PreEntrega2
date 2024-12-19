const products = [

    {
      id: "1",
      name: "Ryzen 5 5600",
      description: "Todavía no se agregó descripción",
      price: 326,
      stock: 10,
      image: "/img/ryzen5.jpg",
      category: "Cpu"
    },
    {
        id: "2",
        name: "Ryzen 7 5700",
        description: "Todavía no se agregó descripción",
        price: 359,
        stock: 10,
        image: "/img/ryzen7.jpg",
        category: "Cpu"
      },
      {
        id: "3",
        name: "Intel i5 13400",
        description: "Todavía no se agregó descripción",
        price: 228,
        stock: 5,
        image: "/img/i5.jpg",
        category: "Cpu"
      },
      {
        id: "4",
        name: "Intel i7 13700",
        description: "Todavía no se agregó descripción",
        price: 347,
        stock: 5,
        image: "/img/i5.jpg",
        category: "Cpu"
      },
      {
        id: "5",
        name: "Corsair Vengeance",
        description: " 16gb (2x8) ddr4 3200",
        price: 39,
        stock: 20,
        image: "/img/corsair16.jpg",
        category: "Ram"
      },
      {
        id: "6",
        name: "Corsair Vengeance Pro",
        description: "16gb (2x8) ddr4 3200",
        price: 64,
        stock: 15,
        image: "/img/corsairPro16.jpg",
        category: "Ram"
      },
      {
        id: "7",
        name: "Asus Strix RTX 3060 ti",
        description: "Todavía no se agregó descripción",
        price: 793,
        stock: 10,
        image: "/img/strix3060.jpg",
        category: "Gpu"
      },
      {
        id: "8",
        name: "MSI 6800 XT",
        description: "Todavía no se agregó descripción",
        price: 639,
        stock: 5,
        image: "/img/radeon6800.jpg",
        category: "Gpu"
      },
      {
        id: "9",
        name: "Zotac RTX 3080 ti",
        description: "Todavía no se agregó descripción",
        price: 1329,
        stock: 2,
        image: "/img/zotac3080.jpg",
        category: "Gpu"
      },
]

const getProducts = () => {
    return new Promise( (resolve, reject) => {
      //simulamos un retraso de red de 2segundos
      setTimeout(()=>{
        resolve(products)
      }, 2000)
    })
  }
  
  export { getProducts }
