import styles from "../../styles/orders.module.css";
import orderData from '../../data/orderData'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import Script from 'next/script';
import { useForm } from 'react-hook-form';
import Link from "next/link";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    orderData.orders()
      .then((orderData) => {
        setOrders(orderData);
        setLoading(false);
        console.log(orderData);
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
            {orders.map((o, i) => (
                <>
                <div className={styles.orderContainer}>
                    <div className={styles.tableTitle}>
                        Table: {o.tableId}
                    </div>
                    {o.items.map((item) => (
                    <>
                        <div className={styles.personTitle}>
                            Order for person {item.itemId}
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
export default Orders;