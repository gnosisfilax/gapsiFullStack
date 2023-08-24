
const getDeveloper = async () => {
  const res = await import("../api/app-details/version/route");
  return await (await res.GET()).json();
};

const Footer = async() => {
  const { version } = await getDeveloper();
  
  return (

      <p className="m-4"> version {version}</p>

  );
}

export default Footer;