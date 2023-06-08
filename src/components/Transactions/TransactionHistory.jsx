import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  // console.log(props);
  return (
    <table className={style.transactionHistory}>
      <thead className={style.theadTable}>
        <tr>
          <th className={style.thTable}>Type</th>
          <th className={style.thTable}>Amount</th>
          <th className={style.thTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr key={id} className={style.tr}>
            <td className={style.tdTable}>{type}</td>
            <td className={style.tdTable}>{amount}</td>
            <td className={style.tdTable}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      }).isRequired
)};

export default TransactionHistory;
