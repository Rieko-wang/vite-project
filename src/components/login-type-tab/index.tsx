// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import {
//   loginTypes as types,
//   defaultLoginType,
// } from "@/components/login-type-tab/constants";

// import "./index.scss";

// const loginTypes = [types.EMAIL, types.PHONE];
// interface IProps {
//   currentTab: types.EMAIL | types.PHONE;
//   onClickTab: () => void;
//   t?: () => void;
// }

// const LoginTypeTab = (props: IProps) => {
//   const { t, currentTab } = props;
//   return (
//     <div className="login-type-tab-wrapper">
//       <div className="login-type-tab-wrapper__tab">
//         <For each="loginType" index="key" of={loginTypes}>
//           <span
//             key={key}
//             className={classNames("login-type-tab-wrapper__tab__item", {
//               "login-type-tab-wrapper__tab__item--selected":
//                 currentTab === loginType,
//               "login-type-tab-wrapper__tab__item--left":
//                 defaultLoginType === loginType,
//               "login-type-tab-wrapper__tab__item--right":
//                 defaultLoginType !== loginType,
//             })}
//             onClick={() => {
//               this.props.onClickTab(loginType);
//             }}
//             role="presentation"
//           >
//             {t(`account_modal.log_in.subtitle.${loginType}`)}
//           </span>
//         </For>
//       </div>
//     </div>
//   );
// };

// LoginTypeTab.defaultProps = {
//   currentTab: types.EMAIL,
//   onClickTab: () => {},
//   t: () => {},
// };
