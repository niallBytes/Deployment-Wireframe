import { prismaClient } from "db/client";

export async function getServerSideProps() {
  //const users = await prismaClient.user.findMany();
  const users = [{ name: 'Placeholder User' }];

  return { props: { users } };
}

export default function Home({ users }: { users: any[] }) {
  return <div>{JSON.stringify(users)}</div>;
}

// INCREMENTAL SITE GENERATION (ISR) - This is a feature of Next.js that allows you to update static pages after the build time
// If you want to keep the page statically genetared "(good to have as it is an html file, need not talk to the db or react to load and give content, the page is already statically generated in the .next folder Nut the problem is If you want to add more things or Refresh according to db, It wont happen, You will need to re-Deploy (bun run build -> bun run start) again )" and give real time updates from the db, validate the page every 60 seconds, uncomment the line below
// export const revalidate = 60 


// OR



// If you force the page to be dynamic, It will not be statically generated. // No need to bun run build in the dockerfile
// export const dynamic = 'force-dynamic'


// BUT If You want to keep the page statically generated and talk to the database when building the page, You need to pass the DATABASE_URL in the bun run build Like how it is done in Dockerfile.frontend 