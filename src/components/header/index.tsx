import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Svg from "@/components/svg";
import useBreakpoint from "@/hooks/useBreakpoint";

import "./index.scss";
// import { isDesktop, isTablet, isMobile } from '~helpers/screen';

export type IShowType =
  | "backgroundGreen"
  | "backgroundWhite"
  | "greenImage"
  | "noBackground";

interface IProps {
  title: string | undefined; // the title of content
  subtitle: string | undefined;
  showType: IShowType;
  hashIcon?: string; // svg hash
  titlePosition: string; // you can write 'center'
  subTitlePosition: string; // you can write 'center'
  isShowClose: boolean;
  isShowBack?: boolean;
  onClose?: () => void;
  onBack?: () => void;
  avatar?: string;
}

const Header: FC<IProps> = ({
  showType,
  hashIcon,
  titlePosition,
  subTitlePosition,
  title,
  subtitle,
  isShowClose,
  isShowBack,
  avatar,
  onBack,
  onClose,
}) => {
  const breakScreens = useBreakpoint();

  console.log(breakScreens, "breakScreens");
  return (
    <div
      className={classNames("account-modal-header", {
        "account-modal-header--desktop": !breakScreens.xs && breakScreens.lg,
        "account-modal-header--mobile": breakScreens.xs,
        "account-modal-header--tablet": breakScreens.md && !breakScreens.lg,
        "account-modal-header--keppel": showType === "backgroundGreen",
        "account-modal-header--white": showType === "backgroundWhite",
        "account-modal-header--image": showType === "greenImage",
        "account-modal-header--none": showType === "noBackground",
      })}
    >
      {hashIcon && (
        <div className="account-modal-header__svg-container">
          <Svg
            className={classNames("account-modal-header__svg-container__icon", {
              "account-modal-header__svg-container__icon--room":
                hashIcon === "room-category-entire-place",
              "account-modal-header__svg-container__icon--warning":
                hashIcon === "tick-warning-yellow",
              "account-modal-header__svg-container__icon--success":
                hashIcon === "tick-success-yellow",
            })}
            hash={hashIcon}
            name="account-modal"
          />
        </div>
      )}

      {avatar && (
        <div className="account-modal-header__avatar">
          <img
            className="account-modal-header__avatar__img"
            src={avatar}
            alt="avatar"
          />
        </div>
      )}

      <div
        className={classNames("account-modal-header__content-container", {
          "account-modal-header__content-container--expand-padding": !subtitle,
          "account-modal-header__content-container--nothing-padding-left":
            !hashIcon,
        })}
      >
        <div
          className={classNames(
            "account-modal-header__content-container__detail",
            {
              "account-modal-header__content-container__detail--title-center":
                titlePosition === "center",
              "account-modal-header__content-container__detail--subtitle-center":
                subTitlePosition === "center",
            }
          )}
        >
          <div
            className={classNames(
              "account-modal-header__content-container__title",
              {
                "account-modal-header__content-container__title--bottom16":
                  !avatar && !subtitle && isShowClose,
                "account-modal-header__content-container__title--bottom4":
                  avatar && subtitle && isShowClose,
              }
            )}
          >
            {title}
          </div>
          {subtitle && (
            <div className="account-modal-header__content-container__subtitle">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {isShowClose && (
        <div
          className="account-modal-header__close"
          onClick={onClose}
          role="presentation"
        >
          <Svg
            className="account-modal-header__close__default"
            hash="modal-icon-close"
            name="account-modal"
          />
        </div>
      )}
      {isShowBack && (
        <div
          className="account-modal-header__back"
          onClick={onBack}
          role="presentation"
        >
          <Svg
            className="account-modal-header__back__default"
            hash="back"
            name="account-modal"
          />
        </div>
      )}
    </div>
  );
};

Header.defaultProps = {
  showType: "backgroundGreen",
  subtitle: "",
  hashIcon: "",
  titlePosition: "",
  subTitlePosition: "",
  isShowClose: false,
  isShowBack: false,
  onClose: () => {},
  onBack: () => {},
  avatar: "",
};

export default Header;
