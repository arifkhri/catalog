import Cart from "./Cart";

export default function Header() {
  return (
    <div className="d-flex justify-between py-4 items-center px-6">
      <img src="/logo.png" width="350px" />
      <Cart />
    </div>
  );
}
