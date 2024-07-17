import "../Styles/globalStyle.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="bg-darkGray p-4 md:p-10 mt-20 text-center md:text-left md:flex md:justify-between items-center">
        <h1 className="text-gray text-sm">
          Kilometer 20 warri patani road, <br /> Ughelli, Delta State, Nigeria.{" "}
          <br /> Phone: 08145652652, 09062303605
        </h1>
        <h1 className=" text-gray text-sm">
          Email: info@transcorppower.com <br />© {new Date().getFullYear()}{" "}
          Transcorp Power. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
