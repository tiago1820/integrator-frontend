import styles from './Pagination.module.css';

export const Pagination = props => {
    const {
        currentPage,
        goToPreviousPage,
        goToNextPage,
        goToPage,
    } = props;

    return (
        <div className={styles.btnContainer}>
            <button
                className={styles.btnPagination}
                onClick={() => goToPreviousPage()} disabled={currentPage === 1}>Prev</button>

            {[1, 2].map(page => (
                <button className={styles.btnPagination} key={page} onClick={() => goToPage(page)}>
                    {page}
                </button>
            ))}

            <button
                className={`${styles.btnPagination} ${styles.disabledBtn}`}
                disabled>...</button>

            {[41, 42].map(page => (
                <button
                    className={styles.btnPagination}
                    key={page}
                    onClick={() => goToPage(page)}>
                    {page}
                </button>
            ))}

            <button
                className={styles.btnPagination}
                onClick={() => goToNextPage()} disabled={currentPage === 42}>Next</button>
        </div>
    )
}
