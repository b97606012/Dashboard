import { NavLink } from 'react-router-dom';
import classes from './LeftPanel.module.css'

function LeftPanel() {
    const handleLogout = () => {
        sessionStorage.clear();
        alert('You are logging out.')
        window.location.assign('/')
    }
    return (
        <div className={classes.leftpanel}>
            <nav>
                <ul className={classes.listAct}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >Dashboard</NavLink>
                    </li>

                </ul>
                <ul className={classes.list}>
                    <li>
                        User Management
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li>
                        Sidebar 1
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li>
                        Sidebar 2
                    </li>
                </ul>
                <ul >
                    <li>
                        <button onClick={handleLogout}>Log out</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftPanel;
