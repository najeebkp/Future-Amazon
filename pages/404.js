import PrimaryLayout from "../components/layout/PrimaryLayout";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "50px 0px" }}
    >
      <div className="disabled-color">
        <div className="very-giant-font">SORRY</div>
        <div>
          <h1>we couldn't find that page</h1>
          <h4>
            try searching or go to{" "}
            <Link href="/">
              <a>Amazon's home page</a>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
// attaching the children with layout
Custom404.Layout = PrimaryLayout;
