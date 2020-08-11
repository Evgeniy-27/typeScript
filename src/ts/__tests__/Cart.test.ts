import Cart from '../service/Cart';
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление товаров в корзину', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min', 300));
  expect(cart.items.length).toBe(3);
})

test('Расчет суммы товаров в корзине', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min', 300));
  const cartSum = cart.getSum();
  expect(cartSum).toBe(3200);
})

test('Расчет суммы товаров в корзине со скидкой', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min', 300));
  const sumWithDiscount = cart.getSumWithDiscount(10);
  expect(sumWithDiscount).toBe(2880);
})

test('Удаление товара из корзины', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min', 300));
  cart.deleteItem(1008);
  expect(cart.items.length).toBe(2);
})

test('Удаление товара из корзины без id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min', 300));
  expect(() => {
      cart.deleteItem(1015);
  }).toThrow();
})