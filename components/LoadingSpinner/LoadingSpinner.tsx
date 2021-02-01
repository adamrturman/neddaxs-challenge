import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC<{}> = () => {

    return (
        <div className={styles.spinner}>
            <CircularProgress />
        </div>
    );
}

export default LoadingSpinner;