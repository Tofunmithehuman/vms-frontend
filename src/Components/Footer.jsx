import "../Styles/globalStyle.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="bg-darkGray p-3 md:p-10 mt-20 flex justify-between items-center text-[8px] sm:text-sm">
        <h1 className="text-gray text-left">
          Kilometer 20 warri patani road, <br /> Ughelli, Delta State, Nigeria.{" "}
          <br /> Phone: 08145652652, 09062303605
        </h1>
        <h1 className=" text-gray text-right">
          Email: info@transcorppower.com <br />© {new Date().getFullYear()}{" "}
          Transcorp Power. All rights reserved. <br />
          Developed by Tofunmithehuman.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
