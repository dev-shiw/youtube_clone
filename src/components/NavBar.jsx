import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const NavBar = () => (
    <Stack direction="row" alignItems="center" p={0.5} sx={{
        position: 'sticky', background: '#000', top: -20, justifyContent: 'space-between'

    }}>
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}> <img src={logo} alt="logo" height={65}/></Link>
        <SearchBar/>
    </Stack>
)

export default NavBar