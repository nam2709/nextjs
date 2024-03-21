// pages/detail/[id]/index.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const router = useRouter();
  return <p>Post: {router.query.id}</p>
}

export default DetailPage;
