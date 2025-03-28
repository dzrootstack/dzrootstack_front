import { Project } from "@/assets/Projects";
import axios from "axios";

export const dynamic = "force-dynamic"; // static by default, unless reading the request

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default async function getProjects() {
  return instance
    .get<Project[] | undefined>("/api/featured")
    .then((res) => (typeof res.data === "object" ? res.data : undefined));
}
