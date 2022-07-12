import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faGear,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import Menu from "~/components/Popper/Menu";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "~/layouts/components/Search";
import config from "~/config";

const cx = classNames.bind(styles);
const currentUser = true;
const MENUITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
const USERMENU = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@truongson1804",
  },
  {
    icon: <FontAwesomeIcon icon={faTiktok} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/settings",
  },
  ...MENUITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
    title: "Logout",
    to: "/logout",
    separate: true,
  },
];
function Header() {
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <Fragment>
              <Tippy
                delay={[0, 200]}
                content="Upload videos"
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn", { message: true })}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </Fragment>
          ) : (
            <Fragment>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </Fragment>
          )}
          <Menu
            items={currentUser ? USERMENU : MENUITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1678055606649857.jpeg?x-expires=1657429200&x-signature=W66f7hHMXXgi8HbiaUDxWMKqShk%3D"
                alt="truongson1804"
                fallback="https://lh3.googleusercontent.com/bfWQZrrlUCDKjhzTDFiz7AH3KKvbtDkcr5_YB49JrBkROQD0irIA5u2-Vl6H9BjBDajf=s85"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
