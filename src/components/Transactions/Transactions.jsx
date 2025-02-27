import css from "./Transactions.module.css";

export default function Transactions({ items: { type, amount, currency } }) {
  return (
    <>
      <td className={css.body}>{type}</td>
      <td className={css.body}>{amount}</td>
      <td className={css.body}>{currency}</td>
    </>
  );
}
