import React from "react";
import styles from "./IntroSection.module.css";
import { array, bool, string } from "prop-types";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import { getHeroSpace } from "../../../services/imgHeroSpace";
const IntroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  type,
  arrayBread,
  isSearch,
}) => {
  let heroSpace = "";
  if (type) {
    heroSpace = getHeroSpace(location?.href);
  }
  return (
    <React.Fragment>
      {type && arrayBread ? (
        <div className="row mx-0 px-0 pl-3 introSectionBread">
          <div className="col-lg-12 pl-5">
            <BreadCrumbs arrayBread={arrayBread} />
          </div>
        </div>
      ) : null}
      <div
        data-testid="Header"
        className={!isSearch ? styles.bkgIntro : ""}
        role="complementary"
      >
        <div className="container-fluid schemaPadding py-5">
          <div className="row mx-0 ">
            <div className=" col-lg-6  mb-0 mb-lg-4 pl-lg-5">
              <div className={"font-weight-bold " + styles.title}>
                <h1>{title}</h1>
              </div>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={`mt-4 ${styles.buttonSection} row`}>
                {primaryButtonLink && primaryButtonText ? (
                  <div
                    className={
                      primaryButtonText.length > 20 ? "col-sm-6" : "col-sm-4"
                    }
                  >
                    <a className={"btn btn-primary"} href={primaryButtonLink}>
                      {primaryButtonText}
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {secondaryButtonLink ? (
                  <div className="col-sm-5">
                    <a
                      className={
                        "btn btn-outline-primary " + styles.btnSecondary
                      }
                      href={secondaryButtonLink}
                    >
                      {secondaryButtonText}
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {type && heroSpace && heroSpace?.url ? (
              <div className="col-lg-6 mt-5 d-flex justify-content-end">
                <img
                  width={heroSpace?.w}
                  height={heroSpace?.h}
                  src={heroSpace?.url}
                  alt={heroSpace?.alt}
                  title={heroSpace?.alt}
                ></img>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

IntroSection.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  primaryButtonText: string,
  secondaryButtonText: string,
  primaryButtonLink: string,
  secondaryButtonLink: string,
  type: string,
  arrayBread: array,
  isSearch: bool,
};

IntroSection.defaultProps = {};

export default IntroSection;
