import Link from "next/link";


interface Props {
  href: string;
  label: string;
}


const AdminActions = ({ href, label }: Props) => {
  return (
    <Link href={href} className="w-full text-center mb-2 p-3 rounded-lg uppercase font-semibold text-slate-50 bg-[#fc9d0f] hover:bg-orange-500 duration-200">
      {label}
    </Link>
  )
}

export default AdminActions;