import Image from "next/image";
import Link from "next/link";
import DevInfo from "./components/developer-info";

const Page = async () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row align-items-center justify-content-center py-5 mt-5">
          <div className="col-5">
            <h1 className="mt-5">Bienvenido</h1>
            <DevInfo />
            <Link className="navbar-brand" href="/users">
              <div className="d-inline-block align-text-top">
                <Image
                  src="/logo.png"
                  alt="Gapsi logo"
                  height={140}
                  width={296}
                />
              </div>              
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
