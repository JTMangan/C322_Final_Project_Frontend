import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import orderData from '../../data/orderData'
import invoiceData from '../../data/invoiceData'
import customerData from '../../data/customerData'
import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import React from 'react';

const addOrder = (props) => {
     const { register, handleSubmit, errors, reset } = useForm();

     //console.log(props.query.tableId)

     let save = async (values) => {
         const order = Object.entries(values).reduce((acc, [k, v]) => {
             const [name, index] = k.split("-")

             acc[+index] = acc[+index] ?? {ItemId: +index+1, quantity: 0}
             acc[+index][name] = v

             return acc
         }, [])

         const response0 = await orderData.saveOrder({
            "tableId": +tableId,
            "items": order,
         });

         const response1 = await invoiceData.saveInvoice({
                 "tableId": +tableId,
                 "total": total,
                 "items": order,
         });
         console.log(response0);
         if(response0 != null){
             reset();
         }
     }

     const router = useRouter();
     const query = router.query;
     const tableId = query.tableId;
     const total = query.numberOfPeople * 12 * 1.05
     console.log("tableId: " + tableId)
     const array = [...Array(query.numberOfPeople).keys()]

    const [customers, setCustomers, customer] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        customerData.customer()
            .then((customerData) => {
                customer(customerData);
                setLoading(false);
                console.log(customerData);
            })
            .catch((e) => console.log(e));
    }, []);

    const formInputs = [];
    for (let i = 0; i < query.numberOfPeople; i++) {
        formInputs.push(<>
                        <div className={styles.order_section}>
                            Order Item: {i+1}
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor={`Appetizers-${i}`}>Appetizer</label>
                            <input type="text"
                                id={`Appetizers-${i}`}
                                name={`Appetizers-${i}`}
                                {...register(`Appetizers-${i}`,
                                    {required: false,
                                        message: 'please enter an Appetizer name' })}
                                placeholder="Enter Appetizer Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor={`MainDishes-${i}`}>Main Dish</label>
                                <input type="text"
                                       id={`MainDishes-${i}`}
                                       name={`MainDishes-${i}`}
                                       {...register(`MainDishes-${i}`,
                                            {required: false,
                                                message: 'please enter a Main Dish name' })}
                                       placeholder="Enter Main Dish Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor={`Dessert-${i}`}>Dessert</label>
                                <input type="text"
                                       id={`Dessert-${i}`}
                                       name={`Dessert-${i}`}
                                       {...register(`Dessert-${i}`,
                                            {required: false,
                                                message: 'please enter an Dessert name' })}
                                       placeholder="Enter Dessert Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor={`Beverages-${i}`}>Beverage</label>
                                <input type="text"
                                       id={`Beverages-${i}`}
                                       name={`Beverages-${i}`}
                                       {...register(`Beverages-${i}`,
                                            {required: false,
                                                message: 'please enter an Beverage name' })}
                                       placeholder="Enter Beverage Name"/>
                        </div>
                        </>
        );
    }

    return(
        <>
            <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <div className={styles.orderFormContainer} id="orderForm">
                    <form action="#" onSubmit={handleSubmit(save)}  className={styles.formContainer}>
                        <div className={styles.formTable}>
                            <div className={styles.section_title}>
                                Order for table: {tableId}
                            </div>
                            <div className={styles.user_input_box}>
                                <label htmlFor="tableId">Table number</label>
                                <input type="number"
                                    id="tableId"
                                    name="tableId"
                                    value={tableId}
                                    {...register('tableId',
                                        {required: true,
                                            message: 'please enter a Table number' })}
                                    placeholder="Enter Table number"/>
                            </div>
                        </div>
                        {formInputs}

                        <div className={styles.form_submit_btn}>
                            <input type="submit" value="save"></input>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>

    )
}

export default addOrder