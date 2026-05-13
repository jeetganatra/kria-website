export function ContactUs() {
  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/file/d/1TVFeXQNlbGkHp7wamDrXd5YKs3pyvi7M/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[80%] items-center px-6 py-1 rounded-full border cursor-pointer hover:bg-[#ebddd1]"
        >
          <span className="text-lg font-medium text-center w-full flex items-center justify-center gap-2">
            Explore our work
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
      <div className="flex gap-16 px-[5%] pt-10 items-start">
        <div className="w-1/2">
          <h1 className="m-0 !text-5xl">Contact us</h1>
          <div className="pt-10">
            <div className="grid grid-cols-[40%_auto] justify-stretch">
              <p className="text-lg">Email</p>
              <p className="text-lg">ar.rinishajain@gmail.com</p>
            </div>
            <div className="grid grid-cols-[40%_auto] justify-stretch pt-5">
              <p className="text-lg">Phone number</p>
              <p className="text-lg">+91 9669432681</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
