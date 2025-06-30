export default function RegisterForm() {
  return (
    <form>
      <h4>Регистрация</h4>
      <input type="email" placeholder="Email" /><br />
      <input type="text" placeholder="Имя" /><br />
      <input type="tel" placeholder="Телефон" /><br />
      <input type="city" placeholder="Город" /><br />
      <button type="submit">Оформить заказ</button>
    </form>
  );
}