interface Props {
  children: JSX.Element;
}


const OverlayContainer = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 z-10 bg-[#00000069]">
      {children}
    </div>
  );
}

export default OverlayContainer;