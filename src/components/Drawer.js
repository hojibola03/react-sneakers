function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between  mb-30">
          Корзина
          <img className="cu-p" src="/img/xbtn.svg" alt="remove" />
        </h2>
        <div className="items flex">
          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/sneaker1.svg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.s</b>
            </div>
            <img className="removeBtn" src="/img/xbtn.svg" alt="remove" />
          </div>

          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/sneaker1.svg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.s</b>
            </div>
            <img className="removeBtn" src="/img/xbtn.svg" alt="remove" />
          </div>

          <div className="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/sneaker2.svg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.s</b>
            </div>
            <img className="removeBtn" src="/img/xbtn.svg" alt="remove" />
          </div>
        </div>
        <div className="cardTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="checkOutbtn">
            Оформить заказ
            <img src="/img/arrowbtn.svg" alt="->" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Drawer
