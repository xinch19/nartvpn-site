function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="badge">NartVPN</span>
            <h1>Быстрый и удобный VPN через Telegram-бота</h1>
            <p className="hero__text">
              Оплачивай подписку, получай конфиг автоматически и подключайся за пару минут.
              Подходит для телефона, ноутбука и других устройств с AmneziaWG.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
                Открыть бота
              </a>
              <a className="btn btn--secondary" href="#pricing">
                Смотреть тарифы
              </a>
            </div>

            <div className="hero__stats">
              <div className="stat">
                <strong>Автовыдача</strong>
                <span>Конфиг приходит сразу после оплаты</span>
              </div>
              <div className="stat">
                <strong>Просто</strong>
                <span>Подключение через Telegram и AmneziaWG</span>
              </div>
              <div className="stat">
                <strong>Поддержка</strong>
                <span>Управление подпиской и помощь в одном месте</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">Преимущества</span>
              <h2>Почему удобно пользоваться NartVPN</h2>
            </div>

            <div className="grid grid--3">
              <article className="card">
                <h3>Быстрый старт</h3>
                <p>
                  Не нужно вручную искать настройки. После оплаты бот сам отправляет готовый конфиг.
                </p>
              </article>

              <article className="card">
                <h3>Простое управление</h3>
                <p>
                  Подписка, продление и выдача конфигурации происходят через Telegram-бота.
                </p>
              </article>

              <article className="card">
                <h3>Автоматизация</h3>
                <p>
                  Доступ активируется автоматически, а после окончания срока подписки отключается без ручной работы.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="pricing">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">Тарифы</span>
              <h2>Выбери подходящую подписку</h2>
              <p>Актуальная оплата и получение доступа происходят в Telegram-боте.</p>
            </div>

            <div className="grid grid--3">
              <article className="card pricing-card">
                <div className="pricing-card__top">
                  <h3>1 месяц</h3>
                  <div className="price">Базовый тариф</div>
                </div>
                <ul className="list">
                  <li>Подходит для первого знакомства</li>
                  <li>Быстрое подключение</li>
                  <li>Автоматическая выдача конфига</li>
                </ul>
                <a className="btn btn--primary btn--full" href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
                  Купить в боте
                </a>
              </article>

              <article className="card pricing-card pricing-card--featured">
                <div className="pricing-badge">Популярно</div>
                <div className="pricing-card__top">
                  <h3>3 месяца</h3>
                  <div className="price">Оптимальный выбор</div>
                </div>
                <ul className="list">
                  <li>Удобно для постоянного использования</li>
                  <li>Меньше продлений</li>
                  <li>Те же быстрые настройки</li>
                </ul>
                <a className="btn btn--primary btn--full" href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
                  Купить в боте
                </a>
              </article>

              <article className="card pricing-card">
                <div className="pricing-card__top">
                  <h3>6 месяцев</h3>
                  <div className="price">Для долгого использования</div>
                </div>
                <ul className="list">
                  <li>Подходит для тех, кто пользуется постоянно</li>
                  <li>Минимум лишних действий</li>
                  <li>Поддержка через Telegram</li>
                </ul>
                <a className="btn btn--primary btn--full" href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
                  Купить в боте
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">Как это работает</span>
              <h2>Подключение в 3 шага</h2>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step__num">1</div>
                <h3>Открой бота</h3>
                <p>Перейди в Telegram-бот NartVPN и выбери нужный тариф.</p>
              </div>

              <div className="step">
                <div className="step__num">2</div>
                <h3>Оплати подписку</h3>
                <p>После успешной оплаты доступ активируется автоматически.</p>
              </div>

              <div className="step">
                <div className="step__num">3</div>
                <h3>Импортируй конфиг</h3>
                <p>Бот отправит готовый файл, который нужно импортировать в AmneziaWG.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="faq">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">FAQ</span>
              <h2>Частые вопросы</h2>
            </div>

            <div className="faq">
              <article className="faq__item">
                <h3>Где происходит покупка?</h3>
                <p>Покупка и выдача доступа происходят через Telegram-бота.</p>
              </article>

              <article className="faq__item">
                <h3>Как подключиться после оплаты?</h3>
                <p>После оплаты бот отправляет конфиг, который нужно импортировать в приложение AmneziaWG.</p>
              </article>

              <article className="faq__item">
                <h3>Можно ли получить конфиг повторно?</h3>
                <p>Да, этот функционал можно добавить в боте, чтобы пользователь получал конфиг повторно.</p>
              </article>

              <article className="faq__item">
                <h3>Что будет после окончания подписки?</h3>
                <p>Доступ к VPN отключается автоматически, после чего можно оформить новую подписку.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container">
            <div className="cta__box">
              <div>
                <span className="section__eyebrow">Готов начать?</span>
                <h2>Открой бота и получи доступ к VPN</h2>
                <p>Весь процесс — от оплаты до выдачи конфига — происходит автоматически.</p>
              </div>

              <a className="btn btn--primary" href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
                Перейти в Telegram-бота
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <strong>NartVPN</strong>
            <p>VPN-сервис с управлением через Telegram.</p>
          </div>

          <div className="footer__links">
            <a href="/terms.html" target="_blank" rel="noreferrer">
              Пользовательское соглашение
            </a>
            <a href="/privacy.html" target="_blank" rel="noreferrer">
              Политика конфиденциальности
            </a>
            <a href="https://t.me/nartv_bot" target="_blank" rel="noreferrer">
              Telegram-бот
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
