import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h4>Домашняя страница</h4>
      <p>
        Это демонстрационный проект, написанный с целью показать уровень
        владения навыками разработки на react.
      </p>
      <h5>Исходный код</h5>
      <p>
        Backend:&nbsp;
        <a
          className="text-info"
          href="https://github.com/horhoj/store-back"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/horhoj/store-back
        </a>
      </p>

      <p>
        Frontend:&nbsp;
        <a
          className="text-info"
          href="https://github.com/horhoj/store-react-front"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/horhoj/store-react-front
        </a>
      </p>

      <h5 className="font-italic">Используемые технологии:</h5>
      <ul>
        <li>react</li>
        <li>redux</li>
        <li>redux-saga</li>
        <li>typescript</li>
        <li>yup</li>
        <li>formik</li>
        <li>scss</li>
        <li>axios</li>
        <li>bootstrap (только классы, без js)</li>
      </ul>
      <h5 className="font-italic">Функционал проекта:</h5>
      <ul>
        <li>backend написан на PHP 7.4 и laravel</li>
        <li>Общение между back и front по API REST</li>
        <li>
          Входящие данные от АПИ валидируются в реальном времени, с помощью
          типов описанных посредством библиотеки yup
        </li>
        <li>
          Описание сущностей выполнено на typescript, который автоматически
          генерируется на основе описаний структур сущностей посредством yup,
          что решает проблему двойного описания сущностей при разработки и их
          валидации в реальном времени
        </li>
        <li>
          Все компоненты написаны с нуля, без использования библиотек, кроме css
          классов bootstrap.
        </li>
        <li>
          Многие компоненты переиспользуются, например DataTable используется
          для отображения списков категорий и товаров, а CategoryList отображает
          список категорий и на странице категорий и в модальной окне для выбора
          категории в форме редактирования товара.
        </li>
        <li>для управления проектом используется redux-saga.</li>
      </ul>
    </div>
  );
};
