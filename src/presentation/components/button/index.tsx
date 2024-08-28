interface ButtonSaveTaskProps {
    onClick: () => void;
}

export const ButtonSaveTask = (props: ButtonSaveTaskProps) => {
    return (
        <button
            onClick={props.onClick}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
            Save
        </button>
    );
}