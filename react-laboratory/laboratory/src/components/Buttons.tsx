type ButtonsProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Buttons = (props: ButtonsProps) => {
    const { children } = props;
    return (
        <button onClick={props.onClick} className="bg-red-500 rounded-lg p-2">
            {children}
        </button>
    );
}