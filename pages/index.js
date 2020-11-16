import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div>
    <ul>
      <li>
        <Link href="/csr">
          <a href="/csr">CSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr">
          <a href="/ssr">SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssg">
          <a href="/ssg">SSG</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
