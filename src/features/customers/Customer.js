import { useSelector } from "react-redux";

function Customer() {
  // store.name => should match the name in store.js
  const customerName = useSelector((store) => store.customer.fullName);
  // console.log(customerName);

  // capitalize first letter of the name
  const firstLetter = customerName.charAt(0).toUpperCase();
  const remainingLetters = customerName.substring(1);
  const customer = firstLetter + remainingLetters;

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
