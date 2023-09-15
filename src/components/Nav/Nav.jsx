import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import PATHROUTES from '../../helpers/PathRoutes.helper';

const Nav = (props) => {
    const { onSearch } = props;
    const { HOME, ABOUT } = PATHROUTES;

    return (
        <div>
            <Link to={HOME}>Home</Link>
            <Link to={ABOUT}>About</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav