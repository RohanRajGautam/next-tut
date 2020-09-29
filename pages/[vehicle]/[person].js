import { useRouter } from 'next/router';

export default function Person() {
  const router = useRouter();
  console.log(router.query);

  return <h2>Rohan's car</h2>;
}
