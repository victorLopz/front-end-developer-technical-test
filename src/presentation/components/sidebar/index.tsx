export interface SidebarProps {
    idActive: number;
    setIdActive: (id: number) => void;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className="min-h-screen w-[300px] bg-blue-900 flex flex-col">
        <button
            onClick={() => props.setIdActive(0)}
            className={`text-white p-4 mt-8 text-start hover:bg-blue-800 hover:cursor-pointer ${props.idActive === 0 ? 'bg-blue-800' : ''}`}
        >
            Tasks
        </button>
        <button
            onClick={() => props.setIdActive(1)}
            className={`text-white p-4 mt-4 text-start hover:bg-blue-800 hover:cursor-pointer ${props.idActive === 1 ? 'bg-blue-800' : ''}`}
        >
            List
        </button>
    </div>
  );
};