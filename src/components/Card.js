function Card() {
  return (
    <div className="d-flex">
      <div className="card">
        <div className="favorite">
          <img src="/img/heart_like.svg" alt="like" />
        </div>
        <img width={133} height={112} src="/img/sneaker1.svg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img height={11} width={11} src="/img/Plus.svg" alt="+" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart_unlike.svg" alt="like" />
        </div>
        <img width={133} height={112} src="/img/sneaker2.svg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img height={11} width={11} src="/img/Plus.svg" alt="+" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart_unlike.svg" alt="like" />
        </div>
        <img width={133} height={112} src="/img/sneaker3.svg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img height={11} width={11} src="/img/Plus.svg" alt="+" />
          </button>
        </div>
      </div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart_unlike.svg" alt="like" />
        </div>
        <img width={133} height={112} src="/img/sneaker4.svg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img height={11} width={11} src="/img/Plus.svg" alt="+" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
