import styles from "../../styles/customers.add.module.css";
import { useForm } from 'react-hook-form';
import customerData from '../../data/customerData'

const addCustomer = () => {
     const { register, handleSubmit, errors, reset } = useForm();

     let save = async (values) => {

         console.log(values);
         const response = await customerData.saveCustomer(values);
         console.log(response);
         if(response != null){
             reset();
         }
     }

    return(
        <>
            <div className={styles.pageContainer}>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.section_title}>
                            Prepare table for customer
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="name">Customer Name</label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    {...register('name',
                                        {required: true,
                                            message: 'please enter an Customer name' })}
                                    placeholder="Enter Customer Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="kids">Are there any kids?</label>
                            <input type="checkbox"
                                id="kids"
                                name="kids"
                                {...register('kids',
                                    {required: true,
                                        message: 'please enter the if there are kids' })}
                                />
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="numberOfKids">How many kids are there?</label>
                                <input type="number"
                                    id="numberOfKids"
                                    name="numberOfKids"
                                        {...register('numberOfKids',
                                            {required: true,
                                                message: 'please enter the number of kids' })}
                                        placeholder="Enter number of kids"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="numberOfPeople">How many people are there?</label>
                                <input type="number"
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                        {...register('numberOfPeople',
                                            {required: true,
                                                message: 'please enter the number of people' })}
                                        placeholder="Enter number of people"/>
                        </div>
                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save"></input>
                    </div>

                </form>
            </div>
            </div>
        </>

    )
}

export default addCustomer;