import useCharacter from '../../hooks/useCharacter';
import styles from './Detail.module.css';
import { useTranslation } from 'react-i18next';

const Detail = () => {
	const character = useCharacter();
	const { t } = useTranslation();

	return (
		<div className={styles.container}>
			<div className={styles.link}>
				<div className={styles.card}>
					<div className={styles.id}>{character?.id}</div>
					<div className={styles.cardContent}>
						<img className={styles.image} src={character?.image} alt='' />
						<div className={styles.name}>{character?.name}</div>
						<div className={styles.details}>
							<div>{t('species')} {character?.species}</div>
							<div>{t('gender')} {character?.gender}</div>
							<div className={styles.origin}>{t('origin')} {character?.origin?.name}</div>
						</div>
						<div className={styles.status}>{t('status')} {character?.status}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Detail
