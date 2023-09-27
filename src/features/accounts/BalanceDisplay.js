// import { useSelector } from "react-redux";

import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // const { balance } = useSelector((state) => state.account);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

// export default BalanceDisplay;

// Legacy way of connecting components to Redux
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
