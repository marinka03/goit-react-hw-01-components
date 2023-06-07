import PropTypes from 'prop-types';
import style from '../transactions/Transaction-history.module.css';

const TransactionHistory = props => {
  console.log(props);
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
        {props.items.map(({ id, type, amount, currency }, idx) => (
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
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
