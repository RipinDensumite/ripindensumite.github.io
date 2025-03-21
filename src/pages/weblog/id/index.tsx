import { useParams } from "react-router";

export default function WebLogIdPage() {
  const { id } = useParams();

  return <div className="text-white">Blog ID Page : {id}</div>;
}
