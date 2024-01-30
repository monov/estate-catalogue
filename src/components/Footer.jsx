import React from "react";
import "./Footer.css";
import { SlPhone, SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="ftr-objects logo">
        <div className="footer-logo"></div>
      </div>
      <div className="ftr-objects">
        <a className="ftr-link" href="#">
          По районам
        </a>
        <a className="ftr-link" href="#">
          Продавцу
        </a>
        <a className="ftr-link" href="#">
          О нас
        </a>
        <a className="ftr-link" href="#">
          Контакты
        </a>
      </div>
      <div className="ftr-objects rekv">
        <span>Реквизиты:</span> ООО "VIP UYLAR"
        <br /> <span>ИНН:</span> 310382762 <br />{" "}
        <span>Юридический адрес:</span> Toshkent <br />viloyati, Angren sh.,
        Mustaqillik<br /> mahallasi, Bunyodkor ko'chasi, <br />13-uy, 29-xonadon <br />{" "}
        <span>р/с:</span> 20208000405639801001 <br />Яшнабадский филиал АКБ<br />
        "Узпромстройбанк"
      </div>
      <div className="ftr-objects cntcts">
        <div className="ftr-cntcts">
          <div className="ftr-cntcts wrap">
            <div>
              <SlPhone className="ftr-ico"/>
            </div>
            <div>
              <span>+998 (78) 113-08-87</span> <br />С 09:00 до 18:00
            </div>
          </div>
        </div>
        <div className="ftr-drs">
          <div>
            <SlLocationPin className="ftr-ico"/>
          </div>
          <div>
            Адрес <br />
            100047, Узбекистан, Ташкент,<br /> улица Шахрисабз, д.1Б, 2 этаж
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
