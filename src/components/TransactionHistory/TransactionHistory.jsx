import Transactions from "../Transactions/Transactions";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <p>Task 3</p>
      <table className={css.table}>
        <thead className={css.title}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <Transactions items={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
