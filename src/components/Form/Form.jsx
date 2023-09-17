export const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { currency } = e.target.elements;

    const [amount, from, , to] = currency.value.split(' ');

    console.log({ amount, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="15 USD in UAH" name="currency" />
      <button type="submit">Exchange</button>
    </form>
  );
};
