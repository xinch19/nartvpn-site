import "./index.css";

const plans = [
  {
    name: "1 месяц",
    price: "150 ₽",
    subtitle: "Базовый доступ на 30 дней",
  },
  {
    name: "6 месяцев",
    price: "700 ₽",
    subtitle: "Выгодный тариф на 180 дней",
    badge: "Популярный",
  },
  {
    name: "1 год",
    price: "1290 ₽",
    subtitle: "Максимальная выгода на 365 дней",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="logo">NartVPN</div>
            <div className="logo-subtitle">Нæхи VPN.</div>
          </div>

          <nav className="nav">
            <a href="#plans">Тарифы</a>
            <a href="#service">О сервисе</a>
            <a href="#how">Как это работает</a>
            <a href="#offer">Оферта</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="pill">Самостоятельный VPN-сервис на базе AmneziaWG</div>

              <h1 className="hero-title">
                Быстрый доступ к VPN
                <span> с выдачей конфигов через Telegram</span>
              </h1>

              <p className="hero-text">
                NartVPN — это цифровой сервис доступа к VPN. После оплаты пользователь
                получает доступ к выбранному тарифу и инструкции по подключению через
                Telegram-бота.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#plans">
                  Посмотреть тарифы
                </a>
                <a className="btn btn-secondary" href="#contacts">
                  Связаться
                </a>
              </div>
            </div>

            <div className="hero-cards">
              <div className="card">
                <div className="card-label">Что получает пользователь</div>
                <ul className="feature-list">
                  <li>Доступ к VPN-сервису на оплаченный срок</li>
                  <li>Подключение через Telegram-бота</li>
                  <li>Конфиг и инструкция по подключению</li>
                  <li>Поддержка по вопросам оплаты и подключения</li>
                </ul>
              </div>

              <div className="card card-soft">
                <div className="card-label">Важно</div>
                <p>
                  Сервис предоставляет цифровую услугу удалённого доступа. Окончательные
                  условия использования, возврата и обслуживания указаны в публичной
                  оферте ниже на странице.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="section">
          <div className="container">
            <div className="section-top">
              <div className="section-label">Тарифы</div>
              <h2>Стоимость доступа</h2>
            </div>

            <div className="plans-grid">
              {plans.map((plan) => (
                <div key={plan.name} className="plan-card">
                  {plan.badge && <div className="badge">{plan.badge}</div>}

                  <div className="plan-label">Тариф</div>
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-subtitle">{plan.subtitle}</div>

                  <p className="plan-text">
                    В стоимость входит доступ к цифровому VPN-сервису на указанный период.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="section">
          <div className="container two-columns">
            <div className="card large-card">
              <div className="section-label">Описание услуги</div>
              <h2>Что представляет собой сервис</h2>
              <p>
                NartVPN предоставляет пользователю платный цифровой доступ к VPN-сервису
                на определённый срок. После оформления заказа пользователь получает доступ
                к подключению и инструкции по использованию через Telegram-бота и/или
                личную ссылку оплаты.
              </p>
              <p>
                Услуга не является материальным товаром и предоставляется в цифровом
                формате. Сервис предназначен для личного использования в рамках условий
                публичной оферты.
              </p>
            </div>

            <div id="how" className="card large-card">
              <div className="section-label">Как это работает</div>
              <h2>Порядок получения доступа</h2>
              <ol className="steps-list">
                <li>Пользователь выбирает тариф и оформляет заказ.</li>
                <li>После оплаты заказ подтверждается платёжной системой.</li>
                <li>Пользователь получает доступ к подключению и инструкции.</li>
                <li>Доступ действует в течение оплаченного периода.</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="offer" className="section">
          <div className="container">
            <div className="card offer-card">
              <div className="section-label">Публичная оферта</div>
              <h2>Краткие условия оказания услуги</h2>

              <div className="offer-list">
                <div>
                  <h3>1. Предмет оферты</h3>
                  <p>
                    Исполнитель предоставляет пользователю платный доступ к цифровому
                    VPN-сервису на выбранный срок согласно действующим тарифам,
                    размещённым на сайте.
                  </p>
                </div>

                <div>
                  <h3>2. Порядок оплаты</h3>
                  <p>
                    Оплата производится в безналичном порядке через подключённые платёжные
                    инструменты. Обязательства по предоставлению доступа считаются
                    принятыми к исполнению после подтверждения оплаты.
                  </p>
                </div>

                <div>
                  <h3>3. Порядок оказания услуги</h3>
                  <p>
                    После подтверждения оплаты пользователю предоставляется цифровой
                    доступ к сервису и/или данные для подключения. Срок действия услуги
                    зависит от выбранного тарифа.
                  </p>
                </div>

                <div>
                  <h3>4. Возвраты</h3>
                  <p>
                    Возврат денежных средств рассматривается в индивидуальном порядке в
                    случаях технической невозможности предоставить доступ или при иных
                    основаниях, предусмотренных законодательством и условиями сервиса.
                  </p>
                </div>

                <div>
                  <h3>5. Ограничение ответственности</h3>
                  <p>
                    Исполнитель не несёт ответственности за невозможность использования
                    сервиса по причинам, не зависящим от него, включая ограничения со
                    стороны сторонних платформ, провайдеров связи, устройств пользователя
                    и иных внешних факторов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-columns">
            <div className="card large-card">
              <div className="section-label">Политика обработки данных</div>
              <h2>Краткая политика конфиденциальности</h2>
              <p>
                Для оформления заказа и оказания услуги сервис может обрабатывать
                минимально необходимый объём данных: контактные данные, данные заказа,
                сведения об оплате и техническую информацию, необходимую для
                предоставления доступа и поддержки.
              </p>
              <p>
                Данные используются исключительно для исполнения заказа, поддержки
                пользователей, ведения расчётов и соблюдения требований законодательства.
              </p>
            </div>

            <div id="contacts" className="card large-card">
              <div className="section-label">Контакты</div>
              <h2>Контактная информация</h2>

              <div className="contacts-list">
                <p>
                  <strong>ФИО:</strong> Khinchagov Arsen Vyacheslavovhich
                </p>
                <p>
                  <strong>Email:</strong> nartvpn@hotmail.com
                </p>
                <p>
                  <strong>Telegram:</strong> @nartv_bot
                </p>
                <p>
                  <strong>Режим поддержки:</strong> ежедневно, 10:00–22:00
                </p>
                <p>
                  <strong>ИНН / реквизиты:</strong>151211393621
                </p>
    
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 NartVPN. Все права защищены.</div>
          <div>Цифровой сервис доступа к VPN</div>
        </div>
      </footer>
    </div>
  );
}