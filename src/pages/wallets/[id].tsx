// import { useRouter } from 'next/router';

// export default function Wallet() {
//   const router = useRouter();
//   const {
//     query: { id },
//   } = router;
//   return (
//     <div>
//       <h1>Details Page</h1>
//     </div>
//   );
// }

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((wallet: any) => {
    return {
      params: { id: wallet.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { wallet: data },
  };
};

export default function Details({ wallet }: any) {
  return (
    <div>
      <h1>{wallet.name}</h1>
      {/* <p>{wallet.address}</p> */}
    </div>
  );
}
