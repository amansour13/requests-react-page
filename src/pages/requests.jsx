import MainContent from "../components/MainContent";
import SideMenu from "../components/SideMenu";
import Sidebar from "../components/sidebar";


function Requests() {
    return (
        <>
            <div style={{display: 'flex', height: '100vh'}}>
                <Sidebar />
                <SideMenu title="الطلبات" items={["الطلبات"]} />

            </div>
            <MainContent title="الطلبات" />
        </>
    );
}

export default Requests;