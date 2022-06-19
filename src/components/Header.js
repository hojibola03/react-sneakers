function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src=" /img/logo.svg" alt="logo" />
        <div>
          <h3 className="text-uppercase ">React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/card.svg" alt="icon" />
            <spn>1205 руб.</spn>
          </li>
          <li>
            <img width={20} height={20} src="/img/heart.svg" alt="heart" />
            <img width={20} height={20} src="/img/human.svg" alt="heart" />
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
