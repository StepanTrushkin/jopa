import NavBar from "../../components/NavBar/NavBar";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import "./MainPage.modules.scss";
import Block from '../../components/Block/Bloc';
function MainPage() {
    // const {modal, open, close} = useContext(ModalContext)

    const [modal, setModal] = useState(false);

    return (
        <>
        <div className="main">
            <NavBar />
            
            {modal && 
            <Modal title="Hello" onClose={() => setModal(false)}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat commodi voluptas maiores quia quidem aliquid vel excepturi libero ut facere voluptatem nesciunt, in facilis sunt fugit vero, adipisci reiciendis provident.</p>
            </Modal>}

            <button className="open-modal-btn" disabled={modal} onClick={() => setModal(true)}>
                Click me
            </button>

            <Block/>
            
            
        </div>

        <div className="submain">
            Hello
        </div>
        </>
    );
}
export default MainPage;
