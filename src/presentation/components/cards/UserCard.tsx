import moment from "moment";
import { UserInterface } from "../../../domain/interfaces/UserInterface";

export const UserCard = (props: UserInterface) => {
    return (
        <div key={props.id} className="flex flex-col mb-4">
            <div className="flex">
                <span className="font-semibold mr-2">Usuario:</span>
                <span>{props.name}</span>
            </div>
            <div className="flex">
                <span className="font-semibold mr-2">fecha de ingreso:</span>
                <span>{moment(props.createdAt).format('DD/MM/YYYY')}</span>
            </div>
        </div>
    );
};