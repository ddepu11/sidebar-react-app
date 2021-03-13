import { links } from "../data";
const Links = () => {
  return (
    <div className="links">
      {links.map((item, index) => (
        <div key={index} className="link flex">
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Links;
