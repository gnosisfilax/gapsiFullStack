
import Link from "next/link";

const getDeveloper = async () => {
  const res = await import("../api/app-details/developer/route");
  return await (await res.GET()).json();
};

const DevInfo = async () => {
  const { developer } = await getDeveloper();
  return (
    <Link
      href="https://www.linkedin.com/in/guillermo-chang-2492821b0/"
      target="_blank"
      style={{textDecoration: 'none'}}
    >
      <h2 className="text-warning my-4">{developer}</h2>
    </Link>
  );
};

export default DevInfo;
