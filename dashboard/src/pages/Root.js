import { Outlet } from 'react-router-dom'
import LeftPanel from '../components/LeftPanel'
import UserPanel from '../components/UserPanel'

function RootLayout() {
    return (<>
        <div style={{ display: "flex" }}>
            <LeftPanel />
            <div style={{ width: "85%", float: 'left' }} >
                <main >
                    <UserPanel />
                    <Outlet />
                </main>
            </div>
        </div>
    </>)
}
export default RootLayout