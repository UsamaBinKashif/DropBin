import Link from "next/link";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className=" text-white bg-black dark:text-black dark:bg-white ">
      <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
       
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black dark:border-white sm:py-2 sm:mt-0 mt-4">
          © 2024 DropBin —
          <Link
            href="https://github.com/UsamaBinKashif/DropBin"
            className=" ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @repository
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
         
       
          <Link className="ml-3 " href="https://www.linkedin.com/in/usamabinkashif/" target="_blank" rel="noopener noreferrer">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
