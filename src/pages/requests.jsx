import MainContent from "../components/MainContent";
import SideMenu from "../components/SideMenu";
import Sidebar from "../components/sidebar";


function Requests() {
    return (
        <>
            <Sidebar />
            <SideMenu title="الطلبات" items={["الطلبات"]} />
            <MainContent title="الطلبات" />
        </>
    );
}

export default Requests;