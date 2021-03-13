import { social } from "../data";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {social.map((item, index) => (
        <a key={index} href={item.url}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
