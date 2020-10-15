import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export default function Person({ ownerList }) {
  const router = useRouter();
  const [owners, setOwners] = useState(ownerList);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `http://localhost:4001/vehicles?ownerName='${query.person}'&vehicle='${query.vehicle}'`
      );
      const ownerList = await response.json();
      setOwners(ownerList);
    }

    if (ownerList[0] == 0) {
      loadData();
    }
  }, []);

  if (!owners[0]) {
    <div>loading...</div>;
  }

  return <pre>{owners[0]?.details}</pre>;
}

Person.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { ownerList: [] };
  }
  const { query } = ctx;
  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName='${query.person}'&vehicle='${query.vehicle}'`
  );
  const ownerList = await response.json();
  return { ownerList: ownerList };
};
