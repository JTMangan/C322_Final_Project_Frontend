import styles from "../../styles/invoices.module.css";
import invoiceData from '../../data/invoiceData'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Script from 'next/script';
import { useForm } from 'react-hook-form';
import Link from "next/link";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    invoiceData.invoices()
      .then((invoiceData) => {
        setInvoices(invoiceData);
        setLoading(false);
        console.log(invoiceData);
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
            {invoices.map((o, i) => (
                <>
                <div className={styles.invoiceContainer}>
                    <div className={styles.tableTitle}>
                        Table: {o.tableId}
                    </div>
                    <div className={styles.personTitle}>
                        Total: ${o.total.toFixed(2)}
                    </div>
                    {o.items.map((item) => (
                    <>
                        <div className={styles.personTitle}>
                            Invoice for person {item.id}
                        </div>
                        <div className={styles.foodItem}>
                            Appetizer: {item.appetizers}
                        </div>
                        <div className={styles.foodItem}>
                            Main Dish: {item.mainDishes}
                        </div>
                        <div className={styles.foodItem}>
                            Dessert: {item.dessert}
                        </div>
                        <div className={styles.foodItem}>
                            Beverage: {item.beverages}
                        </div>
                    </>
             ))}
                </div>
                </>
            ))}
          </div>
        </div>

      </>

    );
};
export default Invoices;