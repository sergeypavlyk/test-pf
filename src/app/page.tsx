import { PathEnum } from "@/enums";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(PathEnum.Artworks);
}
