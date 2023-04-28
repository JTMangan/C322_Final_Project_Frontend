import styles from "@/styles/about.module.css";

const about = () => {

    return(
        <>
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.pageTitle} >
                        About
                    </h1>
                    <p className={styles.aboutText}>
                        This is group 5kline's final project for C323. For our final project, we developed a
                        restaurant app for the backend of a restaurant, where we put in the customers' orders and print
                        out their receipt(invoice). The group members for group 5kline include Abdul Barr Mohammed,
                        Jonathon Mangan, and Tariq Nabi.
                    </p>
                </div>
            </div>
        </>
    )
}

export default about;