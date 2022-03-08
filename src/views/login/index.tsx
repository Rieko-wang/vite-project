/*
 * @Description:
 * @Author: Rieko
 * @LastEditors: Rieko
 * @PersonalStation:
 * @Date: 2022-03-08 13:48:27
 * @LastEditTime: 2022-03-08 16:33:35
 */
import React, { FC } from "react";

import Layout from "@/components/layout";
import useBreakpoint from "@/hooks/useBreakpoint";
import classNames from "classnames";

import "./index.scss";

const LoginView: FC<{}> = () => {
  const breakScreens = useBreakpoint();
  const handleClose = () => {};

  return (
    <div className="login-modal-container">
      <div
        className={classNames("account-modal login-modal", {
          "login-modal--desktop": !breakScreens.xs && breakScreens.lg,
          "login-modal--tablet": breakScreens.md && !breakScreens.lg,
        })}
      >
        <Layout onClose={handleClose} title="登录/注册"></Layout>
      </div>
    </div>
  );
};

export default LoginView;
