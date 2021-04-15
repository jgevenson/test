import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeIcon from '@material-ui/icons/Home'
import {SportsGolf, AccountCircle} from '@material-ui/icons'
import css from './bottom_nav.module.css'
export default function BottomNav() {
    return (
        <BottomNavigation className={css.bottom_nav} showLabels>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Games" icon={<SportsGolf />} />
            <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
    )
}