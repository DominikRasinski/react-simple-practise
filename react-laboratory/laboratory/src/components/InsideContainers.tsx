type InsideContainersProps = {
  type: "centered" | "toLeft" | "toRight";
  classes?: string;
  children?: React.ReactNode;
};

export const InsideContainers = (props: InsideContainersProps) => {
  const { type, classes, children } = props;
  let divClasses: string = "";
  switch (type) {
    case "centered":
      divClasses = "flex items-center flex-col text-start p-4 max-w-[1000px]";
      break;
    case "toLeft":
      divClasses = "flex items-start flex-col text-start p-4 max-w-[1000px]";
      break;
    case "toRight":
      divClasses = "flex items-end flex-col text-start p-4 max-w-[1000px]";
      break;
    default:
      divClasses = "flex items-center flex-col text-start p-4 max-w-[1000px]";
      break;
  }

  return <div className={`${divClasses} ${classes}`}>{children}</div>;
};
