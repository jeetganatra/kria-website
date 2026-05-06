import Instagram from "../data/ConnectIcons/instagram.svg";

export function ContactUs() {
  return (
    <div className="flex gap-16 px-[5%] pt-10 items-start">
      <div className="w-1/2">
        <h1 className="m-0 !text-5xl !font-semibold">Contact us</h1>
        <div className="pt-10">
          <div className="grid grid-cols-[40%_auto] justify-stretch">
            <p className="text-lg">Email</p>
            <p className="text-lg">xyz@gmail.com</p>
          </div>
          <div className="grid grid-cols-[40%_auto] justify-stretch pt-5">
            <p className="text-lg">Phone number</p>
            <p className="text-lg">+91 9999999999</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-0 !text-5xl !font-semibold">Connect</h1>
        <div className="pt-5 grid grid-cols-2">
          <img
            className="h-12 w-12"
            src={Instagram}
            alt="Instagram connection link"
          />
        </div>
      </div>
    </div>
  );
}
