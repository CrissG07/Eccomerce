

const [products, setProducts] = useState([

    { id: 1, name: ' Arroz Diana', price: 2.500, categoria:'comida', image: 'https://tse4.mm.bing.net/th?id=OIP.r-CpC3TYYSlHCPTS-QRkhgHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Leche', price: 3.600,categoria:'comida', image: 'https://tse4.mm.bing.net/th?id=OIP.NDeCRNYDtVHhKATvSNRoswHaHa&pid=Api&P=0&h=180' },
    { id: 3, name: 'Panela', price: 5.600,categoria:'comida', image: 'https://tse4.mm.bing.net/th?id=OIP.cbBHIn9cJ5YUUAosclOo3QHaFn&pid=Api&P=0&h=180' },
    { id: 4, name: 'Azucar', price: 12.100,categoria:'comida', image: 'https://tse1.mm.bing.net/th?id=OIP.tivZAqUuHSX8fqaA6x66XQHaHa&pid=Api&P=0&h=180' },
    { id: 5, name: 'Sal', price: 2.500,categoria:'comida', image: 'https://tse3.mm.bing.net/th?id=OIP.2JdMKD-W6mHoRXSrxfKQLAHaHa&pid=Api&P=0&h=180' },
    { id: 6, name: 'Guayos', price: 130.000,categoria:'moda', image: 'https://tse2.mm.bing.net/th?id=OIP.Ozulv6td4oxE3uBBnk_H6AHaHa&pid=Api&P=0&h=180'},
    { id: 7, name: 'Zapatos Nike', price: 500.000,categoria:'moda¨', image: 'https://tse3.mm.bing.net/th?id=OIP.l5_8wLxvgwcGhr9yq6kPiwHaFB&pid=Api&P=0&h=180'},
    { id: 8, name: 'Camisa nike', price: 190.000,categoria:'comida', image: 'https://tse3.mm.bing.net/th?id=OIP.aoCQujzKT_MVJPMgKJLa7QHaHa&pid=Api&P=0&h=180'},
    { id: 9, name: 'Pantalon Puma', price: 150.000,categoria:'comida', image: 'https://tse2.mm.bing.net/th?id=OIP.5AdX2lDXurF5iAJ5fOxi-QHaHa&pid=Api&P=0&h=180'},
    { id: 10, name: 'Medias Nike', price: 125.000,categoria:'comida', image: 'https://tse1.mm.bing.net/th?id=OIP.KR6nM4O6fyd1HA7FLpf15gHaHa&pid=Api&P=0&h=180'},
    { id: 11, name: 'Bafle', price: 135.000,categoria:'electronicos', image: 'http://www.steren.com.co/pub/media/catalog/product/b/a/baf-0845bt_x2_1.jpg'},
    { id: 12, name: 'Audifonos', price: 850.000,categoria:'electronicos', image: 'https://tse4.mm.bing.net/th?id=OIP.Qjjz6APi9jMGnZwiAwVOWgHaHa&pid=Api&P=0&h=180'},
    { id: 13, name: 'Televisor', price: 900.000,categoria:'electronicos', image: 'https://tse2.mm.bing.net/th?id=OIP.doRHpw_Rqpynh5MvCUI4gQHaFj&pid=Api&P=0&h=180'},
    { id: 14, name: 'Lavadora', price: 1000000,categoria:'electronicos', image: 'https://tse1.mm.bing.net/th?id=OIP.KR6nM4O6fyd1HA7FLpf15gHaHa&pid=Api&P=0&h=180'},
    { id: 15, name: 'Cama', price: 969.000,categoria:'hogar', image: 'https://tse4.mm.bing.net/th?id=OIP.s9EIuinVtEgLrzsPW-GJ8QAAAA&pid=Api&P=0&h=180'},
    { id: 16, name: 'cortinas', price: 130.000,categoria:'hogar', image: 'https://tse1.mm.bing.net/th?id=OIP.hiWsZofmVACSfQgZ5mm9pAHaLH&pid=Api&P=0&h=180'},
    { id: 17, name: 'almohada', price: 70.000,categoria:'hogar', image: 'https://tse2.mm.bing.net/th?id=OIP._2f5eT9wVeT-Ls7jX-a-cQHaFj&pid=Api&P=0&h=180'},
    { id: 18, name: 'trapeador', price: 10.000,categoria:'hogar', image: 'https://tse3.mm.bing.net/th?id=OIP.eCTuTtgh9XAxENfnx0lm3gHaHa&pid=Api&P=0&h=180'},
    { id: 19, name: 'escoba', price: 10.000,categoria:'hogar', image: 'https://tse1.mm.bing.net/th?id=OIP.0Ulk94dzcG_gAa5N6ozxRAHaHa&pid=Api&P=0&h=180'},
    { id: 20, name: 'Recojedor', price: 80.000,categoria:'hogar', image: 'https://tse4.mm.bing.net/th?id=OIP.b_KFXdWlryBS9HdcGKCprgHaHa&pid=Api&P=0&h=180'},
    
    { id: 21, name: 'Balón de Fútbol', price: 25.99,categoria:'deportes', image: 'https://example.com/football.jpg' },
    { id: 22, name: 'Raqueta de Tenis', price: 79.99,categoria:'deportes', image: 'https://example.com/tennis-racket.jpg' },
    { id: 23, name: 'Guantes de Boxeo', price: 39.99,categotia:'deportes', image: 'https://example.com/boxing-gloves.jpg' },
    { id: 24, name: 'Bicicleta de Montaña', price: 499.99,categoria:'deportes', image: 'https://example.com/mountain-bike.jpg' },
    { id: 25, name: 'Pesas de 10kg', price: 29.99,categoria:'deportes', image: 'https://example.com/dumbbells.jpg' },
  
   
    { id: 26, name: 'Muñeca Barbie', price: 19.99,categoria:'juguetes', image: 'https://example.com/barbie.jpg' },
    { id: 27, name: 'Lego Star Wars', price: 59.99,categoria:'juguetes', image: 'https://example.com/lego-star-wars.jpg' },
    { id: 28, name: 'Coche Teledirigido', price: 34.99,categoria:'juguetes', image: 'https://example.com/rc-car.jpg' },
    { id: 29, name: 'Rompecabezas 1000 piezas', price: 14.99,categoria:'juguetes', image: 'https://example.com/puzzle.jpg' },
    { id: 30, name: 'Pelota de Playa', price: 5.99,categoria:'juguetes', image: 'https://example.com/beach-ball.jpg' },

        { id: 31, name: 'Labial Rojo', price: 9.99,categoria:'belleza', image: 'https://example.com/red-lipstick.jpg' },
      { id: 32, name: 'Perfume Floral', price: 49.99,categoria:'belleza',  image: 'https://example.com/floral-perfume.jpg' },
        { id: 33, name: 'Crema Hidratante', price: 24.99,categoria:'belleza',  image: 'https://example.com/moisturizer.jpg' },
        { id: 34, name: 'Paleta de Sombras', price: 19.99,categoria:'belleza',  image: 'https://example.com/eyeshadow-palette.jpg' },
        { id: 35, name: 'Mascarilla Facial', price: 4.99,categoria:'belleza',  image: 'https://example.com/face-mask.jpg' },
 

        { id: 36, name: 'Taladro Eléctrico', price: 89.99,categoria:'herramientas', image: 'https://example.com/drill.jpg' },
        { id: 37, name: 'Caja de Herramientas', price: 59.99,categoria:'herramientas', image: 'https://example.com/toolbox.jpg' },
        { id: 38, name: 'Destornillador', price: 14.99,categoria:'herramientas', image: 'https://example.com/screwdriver.jpg' },
        { id: 39, name: 'Martillo', price: 12.99,categoria:'herramientas', image: 'https://example.com/hammer.jpg' },
        { id: 40, name: 'Llave Inglesa', price: 10.99,categoria:'herramientas', image: 'https://example.com/wrench.jpg' },
    
          
        
        { id: 21, name: 'Collar para Perro', price: 7.99,categoria:'mascotas', image: 'https://example.com/dog-collar.jpg' },
        { id: 22, name: 'Juguete para Gato', price: 4.99,categoria:'mascotas', image: 'https://example.com/cat-toy.jpg' },
        { id: 23, name: 'Cama para Mascota', price: 29.99,categoria:'mascotas', image: 'https://example.com/pet-bed.jpg' },
        { id: 24, name: 'Comedero Automático', price: 49.99,categoria:'mascotas', image: 'https://example.com/automatic-feeder.jpg' },
        { id: 25, name: 'Champú para Perros', price: 6.99,categoria:'mascotas', image: 'https://example.com/dog-shampoo.jpg' },
        
  
  ]);