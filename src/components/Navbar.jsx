import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ModalPoll from "./ModalPoll.jsx";

const Navbar = ({isPollAdded,setIsPollAdded}) => {
    const navigate = useNavigate()
    const handleLogoutClick = () => {
        navigate("/login")
    }
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <nav className=" w-full bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <button
                    onClick={() => props.setOpenModal('default')}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Add Poll
                </button>
                <ModalPoll isPollAdded={isPollAdded} setIsPollAdded={setIsPollAdded} props={props}/>
                <div className="flex items-center">
                    <button
                        onClick={handleLogoutClick}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;