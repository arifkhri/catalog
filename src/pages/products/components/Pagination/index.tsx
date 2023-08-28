import style from "./style.module.scss";

export default function HeaderPage() {
  return (
    <div className="d-flex items-center flex-col mb-5">
      <img src="/logo.png" width="350px" />

      <div className={style["social"]}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/social/fb.svg" width="40px" className="mr-4" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/social/ig.svg" width="40px" />
        </a>
      </div>
    </div>
  );
}
