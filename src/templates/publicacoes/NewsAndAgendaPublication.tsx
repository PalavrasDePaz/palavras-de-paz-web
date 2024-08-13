import { Publication } from "../../hooks/types";

interface props {
  publication: Publication;
}

export default function NewsAndAgendaPublication({ publication }: props) {
  return <div dangerouslySetInnerHTML={{ __html: publication.content }} />;
}
