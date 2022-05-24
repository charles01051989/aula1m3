const paletas = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/chocolate-belga.png',
      preco: 7.0,
    },
    {
      id: 4,
      sabor: 'Maracujá',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/maracuja.png',
      preco: 6.0, 
    },
    {
      id: 5,
      sabor: 'Morango',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/morango.png',
      preco: 6.50, 
    },
    {
      id: 6,
      sabor: 'Limão',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/limao.png',
      preco: 5.0, 
    },
    {
      id: 7,
      sabor: 'Ninho com Ovomaltine',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/ninho-com-ovomaltine.png',
      preco: 7.0, 
    },
    {
      id: 8,
      sabor: 'Cookies',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/cookies.png',
      preco: 8.0, 
    },
    {
      id: 9,
      sabor: 'Doce de Leite com Doce de Leite',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/doce-de-leite-com-doce-de-leite.png',
      preco: 8.0, 
    }
  ];
  
  const findAllPaletasService = () => {
    return paletas;
  };
  
  const findByIdPaletaService = (id) => {
    return paletas.find((paleta) => paleta.id == id);
  };
  
  const createPaletaService = (newPaleta) => {
    const newId = paletas.length + 1;
    newPaleta.id = newId;
    paletas.push(newPaleta);
    return newPaleta;
  };

  const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
  };

  const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    return paletas.splice(paletaIndex, 1);
  };

  module.exports = {
    findAllPaletasService,
    findByIdPaletaService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
  };
