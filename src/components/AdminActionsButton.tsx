import { MouseEventHandler } from "react";


interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}


const AdminActionsButton = ({ label, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-center mb-2 p-3 rounded-lg uppercase font-semibold text-slate-50 bg-[#fc9d0f] hover:bg-orange-500 duration-200"
    >
      {label}
    </button>
  )
}

export default AdminActionsButton;