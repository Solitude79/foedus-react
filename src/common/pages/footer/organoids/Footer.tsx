import "../styles/Footer.css"

interface IFooter {
}
export const Footer = (params: IFooter) => {
  return (
    <div className="foedus-footer">
      <div className="footer-items">
        <div className="footer-item">
          <div className="head">ПРОЕКТЫ</div>
          <div className="link-list">
            <div className="link"><a className="ref" href="/">Искусство</a></div>
            <div className="link"><a className="ref" href="/">Комиксы & иллюстрация</a></div>
            <div className="link"><a className="ref" href="/">Дизайн</a></div>
            <div className="link"><a className="ref" href="/">Фильмы</a></div>
            <div className="link"><a className="ref" href="/">Игры</a></div>
            <div className="link"><a className="ref" href="/">Музыка</a></div>
          </div>
        </div>
        <div className="footer-item">
          <div className="head">О НАС</div>
          <div className="link-list">
            <div className="link"><a className="ref" href="/">Что такое Foedus?</a></div>
            <div className="link"><a className="ref" href="/">Партнеры</a></div>
            <div className="link"><a className="ref" href="/">Для СМИ</a></div>
            <div className="link"><a className="ref" href="/">Пользовательское соглашение</a></div>
            <div className="link"><a className="ref" href="/">Политика кофеденциальности</a></div>
          </div>
        </div>
        <div className="footer-item">
          <div className="head">ПОДДЕРЖКА</div>
          <div className="link-list">
            <div className="link"><a className="ref" href="/">Частые вопросы</a></div>
            <div className="link"><a className="ref" href="/">Правила сервиса</a></div>
            <div className="link"><a className="ref" href="/">Способы оплаты</a></div>
            <div className="link"><a className="ref" href="/">Задать вопрос</a></div>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom-info">
        <div className="contacts">
          <div className="phone">Email: foedus@email.ru</div>
          <div className="email">Phone: +7 (983) 154 11 72</div>
        </div>
        <div className="rights">
          <div>All rights reserved</div>
        </div>
      </div>
    </div>  
  )
}