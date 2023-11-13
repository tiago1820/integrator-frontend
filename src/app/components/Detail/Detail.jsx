import { useCharacter } from '../../hooks';
import styles from './Detail.module.css';
import { useTranslation } from 'react-i18next';


export const Detail = () => {
	const { t } = useTranslation();
	const character = useCharacter();

	return (
		<>
			<img className={styles.charImg} src={character?.image} alt="" />
			<table className={styles.charTable}>
				<thead>
					<tr>
						<th colSpan="2">{character?.name}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{t('species')}</td>
						<td>{character?.species}</td>
					</tr>
					<tr>
						<td>{t('gender')}</td>
						<td>{character?.gender}</td>
					</tr>
					<tr>
						<td>{t('origin')}</td>
						<td>{character.origin?.name}</td>
					</tr>
					<tr>
						<td>{t('status')}</td>
						<td>{character?.status}</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}