import React from 'react'
import { fullProject } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { ArrowLeft, Tags } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 30;

const getData=async(slug:string)=>{
    const querry = `
    *[_type=='projects' && slug.current =='${slug}']{
        "currentSlug":slug.current,
          title,
          titleImage,
          content,
        tags
      }[0]`
    const data:fullProject = await client.fetch(querry);
    return data;
  }

  const components: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            return (
                <Image
                    src={urlFor(value).url() as string}
                    alt={value.alt || 'blog image'}
                    width={600}
                    height={600}
                    className='object-cover rounded-lg border'
                />
            )
        }
    }
}

const page = async({params}:{params:{slug:string}}) => {
    const data:fullProject = await getData(params.slug);
  return (
    <div>
        <Link href="/" className='mb-6'>
        <ArrowLeft />
        </Link>
        <h1 className='font-bold text-blue-600 dark:text-white text-2xl mb-2 mt-6'>{data.title}</h1>
        <Image src={urlFor(data.titleImage).url() as string} alt='blog image' width={600} height={600} priority className='object-cover rounded-lg border' />
        <div className='mt-3 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary'>
            <PortableText value={data.content} components={components} />
        </div>
        <div className='flex flex-row gap-2 items-center mt-5'>
        <Tags />
            <span>Tags :</span>
            <ul className='uppercase flex flex-row gap-2 '>
            {data.tags.map((tag, index)=>(
                <li key={index} className='border p-1 rounded-md dark:border-white' >{tag}</li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default page