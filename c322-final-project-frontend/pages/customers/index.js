import styles from "../../styles/customers.module.css";
import customerData from '../../data/customerData'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Script from 'next/script';
import { useForm } from 'react-hook-form';
import Link from "next/link";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customerData.customers()
      .then((customerData) => {
        setCustomers(customerData);
        setLoading(false);
        console.log(customerData);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <div className={styles.container}>
            {customers.map((o, i) => (
                <div className={styles.orderContainer}>
                    <div className={styles.tableTitle}>
                        Table: {o.tableId}
                    </div>
                    <div className={styles.customerInfo}>
                        Name: {o.name}
                    </div>
                    <div className={styles.customerInfo}>
                        Number of people: {o.numberOfPeople}
                    </div>
                    <div className={styles.customerInfo}>
                        Number of kids: {o.numberOfKids}
                    </div>
                    <Link href={{
                            pathname: "/orders/add",
                            query: {
                                tableId: o.tableId,
                                numberOfPeople: o.numberOfPeople
                            }
                        }}
                        className={styles.makeOrder} >
                            Place order
                    </Link>
                    <Link href={{
                            pathname: "/invoices",
                            query: {
                                tableId: o.tableId,
                            }
                        }}
                        className={styles.makeOrder} >
                            Request Invoice
                    </Link>
                </div>
            ))}


          </div>
        </div>

      </>

    );
};
export default Customers;
