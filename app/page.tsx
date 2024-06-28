import {client, urlFor} from "../lib/sanity";
import { simpleProjectCard } from "@/lib/interface";
import ProjectsList from "@/components/projectsList";
export const revalidate = 30;

const getData=async()=>{
  const querry = `
  *[_type=='projects'] | order(_createdAt desc){
    title, smallDescription,
      "currentSlug":slug.current
  }`
  const data:simpleProjectCard[] = await client.fetch(querry);
  return data;
}


export default async function Home() {
  const data = await getData();
  return (
    <ProjectsList data={data} />
  );
}
