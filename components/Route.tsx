import React from 'react';
import Link from 'next/link';

const Route = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return (
    <Link key={route} href={route}>
      {children}
    </Link>
  );
};

export default Route;
