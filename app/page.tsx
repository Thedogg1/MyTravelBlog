/* eslint-disable react/jsx-key */
import React from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Main from '@/components/Main';

const query = groq`
*[_type =="post"]{
...,
author ->,
} | order(_createdAt desc)`;

const page = async () => {
  //pasees the data through a prop to main
  const posts = await client.fetch(query);
  //console.log('Posts', posts);

  return (
    <div>
      <Header />
      <Hero />

      <Main posts={posts} />
      <Footer />
    </div>
  );
};

export default page;
