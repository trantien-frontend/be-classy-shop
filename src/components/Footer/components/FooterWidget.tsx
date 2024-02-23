import {} from "react";
import { Link } from "react-router-dom";

export interface FooterWidgetProps {
  title?: string;
  list?: string[];
  imageSrc?: string;
}

export default function FooterWidget(props: FooterWidgetProps) {
  const { imageSrc, title, list } = props;
  return (
    <div className="footer-widget md:basis-1/4">
      {!title && (
        <>
          <div className="w-3/5 mb-3.5 py-3">
            <Link to="/">
              <img src={imageSrc} alt="" />
            </Link>
          </div>
          <ul className="list-address-contact">
            {list?.map((item, index) => {
              if (index == list.length - 2) {
                return (
                  <li key={index} className="font-medium mb-2 text-base">
                    <a href="#">{item}</a>
                  </li>
                );
              }
              if (index == list.length - 1) {
                return (
                  <li key={index} className="font-medium mb-2 text-base">
                    <a href="#">{item}</a>
                  </li>
                );
              }

              return (
                <li key={index} className="font-medium mb-2 text-base">
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {title && (
        <>
          <h3 className="uppercase mb-3.5 py-3">{title}</h3>
          <ul className="mb-2">
            {list?.map((item, index) => (
              <li className="font-medium text-base mb-2" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <img className="w-3/5" src={imageSrc} alt="" />
        </>
      )}
    </div>
  );
}
