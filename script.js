const products = [
    {
      name: 'Стильные наушники',
      description: 'Высокое качество звука, удобная посадка и современный дизайн.',
      price: '3500 ₽',
      img: 'https://images.unsplash.com/photo-1516728778615-2d590ea1856f?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Смарт-часы',
      description: 'Отслеживайте активность и получайте уведомления прямо на руку.',
      price: '5000 ₽',
      img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Портативная колонка',
      description: 'Мощный звук в компактном формате для любого праздника.',
      price: '2700 ₽',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Экшн-камера',
      description: 'Записывайте яркие моменты вашей жизни в высоком разрешении.',
      price: '8500 ₽',
      img: 'https://images.unsplash.com/photo-1519183071298-a2962ccdaff2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const productsContainer = document.getElementById('products');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img class="product-img" src="${product.img}" alt="${product.name}" />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">${product.price}</div>
      </div>
    `;
    productsContainer.appendChild(card);
  });
