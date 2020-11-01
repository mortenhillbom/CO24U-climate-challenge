import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    router.push("login");
  });

  return <p>Loading...</p>;
}
