import { TaskInterface } from "../../../domain/interfaces/TaskInterface";


export const TaskCard = (props: TaskInterface & { deleteTask: () => void }) => (
    <div key={props.id} className="flex h-10 gap-4 border-b w-full mt-4 b-2">
        <div className="w-full px-2 py-1">
            {props.task}
        </div>
        <button
            onClick={() => props.deleteTask()}
            className="bg-red-500 text-white px-2 h-9 rounded-md hover:bg-red-600"
        >
            Delete
        </button>
    </div>
);