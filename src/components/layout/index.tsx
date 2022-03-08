/* eslint-disable react/no-danger */
import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Svg from "@/components/svg";
import Header, { IShowType } from "@/components/header";
// import { isDesktop, isTablet, isMobile } from '~helpers/screen';
// import getLocale from '~base-helpers/locale';
import decodeHtml from "@/utils/decode-html";
import useBreakpoint from "@/hooks/useBreakpoint";

import "./index.scss";

interface IProps {
  children?: any;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  avatar?: string;
  t?: () => void;
  isHideAcceptance?: boolean;
}

const Layout: FC<IProps> = ({
  avatar,
  title,
  subtitle,
  onClose,
  children,
  isHideAcceptance,
}) => {
  const breakScreens = useBreakpoint();

  const getHtmlOfTAndCElement = () => {
    //   const translatedTAndCs = this.props.t(
    //     "account_modal.sign_up.acceptance_message",
    //     {
    //       terms_of_use: this.wrapALabel(
    //         "/terms/terms-of-use",
    //         "terms_of_use_policy"
    //       ),
    //       acceptable_use_policy: this.wrapALabel(
    //         "/terms/acceptable-use",
    //         "acceptable_use_policy"
    //       ),
    //       privacy_policy: this.wrapALabel("/terms/privacy", "privacy_policy"),
    //       cookie_policy: this.wrapALabel("/terms/cookies", "cookie_policy"),
    //     }
    //   );
    // return decodeHtml(translatedTAndCs);
    return decodeHtml("1231232");
  };

  // const wrapALabel = (linkParam, contentKey) => {
  //   const localePrefix =
  //     ["zh-cn", "en-us"].indexOf(getLocale()) === -1 ? `/${getLocale()}` : "";
  //   const link = `${localePrefix}${linkParam}`;
  //   const content = this.props.t(`account_modal.sign_up.${contentKey}`);
  //   return `<a target="_blank" href="${link}">${content}</a>`;
  // };

  const headerBackground = (): IShowType => {
    let backgroundType: IShowType = "noBackground";
    if (!breakScreens.xs && breakScreens.lg) {
      backgroundType = "backgroundWhite";
    } else if (breakScreens.md && !breakScreens.lg) {
      backgroundType = "greenImage";
    } else {
      backgroundType = "noBackground";
    }
    return backgroundType;
  };

  return (
    <div
      className={classNames("layout", {
        "layout--desktop": !breakScreens.xs && breakScreens.lg,
        "layout--tablet": breakScreens.md && !breakScreens.lg,
        "layout--mobile": breakScreens.xs,
      })}
    >
      {/* {isDesktop() && ( */}
      {!breakScreens.xs && breakScreens.lg && (
        <div className="layout__sidebar layout__sidebar--background">
          <div className="layout__sidebar__container">
            <div className="layout__sidebar__dialog">
              <Svg
                className="layout__sidebar__dialog__icon"
                hash="dialog"
                name="account-modal"
              />
              <span className="layout__sidebar__dialog__content">
                {/* <Choose> */}
                {/* This is the demand for the PM:in zh-cn,student.com on the same line */}
                {/* <When condition={getLocale() === 'zh-cn'}>
                      欢迎加入<br />学旅家！
                    </When>
                    <Otherwise>
                      {this.props.t('account_modal.message.welcome')}
                    </Otherwise>
                  </Choose> */}
                欢迎加入
                <br />
                学旅家！
              </span>
            </div>
            <Svg
              className="layout__sidebar__girl"
              hash="girl_illustrate"
              name="account-modal"
            />
          </div>
        </div>
      )}

      <div className="layout__mainly--background" />
      <div
        className={classNames("layout__mainly", {
          "layout__mainly--with-avatar": avatar,
        })}
      >
        <Header
          showType={headerBackground()}
          title={title}
          titlePosition="center"
          subTitlePosition="center"
          subtitle={subtitle}
          isShowClose
          onClose={onClose}
          avatar={avatar}
        />
        <div
          className={classNames("layout__mainly__content", {
            "layout__mainly__content--without-acceptance": isHideAcceptance,
          })}
        >
          {children}
        </div>

        {!isHideAcceptance && (
          <div className="layout__mainly__bottom">
            <span
              dangerouslySetInnerHTML={{ __html: getHtmlOfTAndCElement() }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
  onClose: () => {},
  title: "",
  subtitle: "",
  avatar: "",
  t: () => {},
  isHideAcceptance: false,
};

export default Layout;
