import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { SidebarProps } from "../sidebar";

export const Topbar = (props: SidebarProps) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="flex justify-end p-8">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-2xl text-blue-900 hover:text-blue-800 hover:cursor-pointer"
                >
                    <RiMenuLine />
                </button>
            </div>
            {
                showMenu && (
                    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="mx-auto w-5/6 shadow-lg bg-blue-900 flex flex-col p-4 border-t-4 border-principal">
                               <div className="flex justify-end">
                                    <button
                                        onClick={() => setShowMenu(!showMenu)}
                                        className={`text-white p-4 mt-4 text-start hover:bg-blue-800 hover:cursor-pointer`}
                                    >
                                        Close
                                    </button>
                               </div>
                               <div className="flex flex-col">
                                     <button
                                        onClick={() => {
                                            props.setIdActive(0)
                                            setShowMenu(!showMenu)
                                        }}
                                        className={`text-white p-4 mt-8 text-start hover:bg-blue-800 hover:cursor-pointer ${props.idActive === 0 ? 'bg-blue-800' : ''}`}
                                    >
                                        Tasks
                                    </button>
                                    <button
                                        onClick={() => {
                                            props.setIdActive(1)
                                            setShowMenu(!showMenu)
                                        }}
                                        className={`text-white p-4 mt-4 text-start hover:bg-blue-800 hover:cursor-pointer ${props.idActive === 1 ? 'bg-blue-800' : ''}`}
                                    >
                                        List
                                    </button>
                               </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}