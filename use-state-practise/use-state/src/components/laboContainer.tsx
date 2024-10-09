type LaboContainerProps = {
  children?: React.ReactNode;
};

export const LaboContainer = (props: LaboContainerProps) => {
  if (props.children === undefined) {
    console.error('to use laboContainer, you must provide children');
    return null;
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[#282c34] gap-4'>
      {props.children}
    </div>
  );
};
