import "./index.sass";

export default function TopNavigation() {
  return (
    <div className="navigation">
      <a href="/">
        <a> Home </a>
      </a>
      <a href="#">
        <a> Course </a>
      </a>
      <a href="/contact">
        <a> Contact </a>
      </a>
      {/* <a onClick={openContactModal}> Contact </a> */}
      <a href="#">
        <a> F.A.Q </a>
      </a>
    </div>
  );
}
