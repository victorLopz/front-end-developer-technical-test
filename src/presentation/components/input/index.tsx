interface InputProps {
    type: string;
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input = (props: InputProps) => {
    return (
        <div>
            <p className="text-white">
                {props.placeholder}
            </p>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className="border border-gray-300 rounded-md px-2 py-1 w-80 my-2"
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </div>
    );
}