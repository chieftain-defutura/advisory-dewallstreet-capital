import React from "react";
import { Formik, Form, Field } from "formik";
import User from "../../public/assets/icons/user.svg";
import Mail from "../../public/assets/icons/mail.svg";
import Logo from "../../public/assets/icons/logo.svg";
import Briefcase from "../../public/assets/icons/briefcase.svg";
import India from "../../public/assets/icons/india.svg";
import Phone from "../../public/assets/icons/phone.svg";
import Company from "../../public/assets/icons/company.svg";
import styles from "./Advisory.module.scss";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

const Advisory: React.FC = () => {
  return (
    <>
      <div className={styles.advisory_bg_img}>
        <div className="mx">
          <div className={styles.advisory}>
            <div className={styles.advisory_content}>
              <div className={styles.advisory_logo}>
                <Link href="/">
                  <Image src={Logo} alt="" />
                </Link>
              </div>
              <div>
                <p>
                  We are under the process of legally structuring and
                  establishing a separate advisory board for startups,
                  enterprises and corporates to work with us on private equity
                  partnership basis on their new lines on business
                  establishments.
                </p>
              </div>
            </div>
            <div className={styles.advisory_form}>
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    lastName: "",
                    number: "",
                    email: "",
                    designation: "",
                    company: "",
                  }}
                  onSubmit={(value) => console.log(value)}
                >
                  {() => (
                    <Form>
                      <div className={styles.signup}>
                        <div className={styles.signup_info}>
                          <h2>STAY TUNED.</h2>
                          <div className={styles.login_info}>
                            <div className={styles.personal_detials}>
                              <Image src={User} alt="" width={20} height={20} />
                              <Field name="name" placeholder="First name" />
                            </div>
                            <div className={styles.personal_detials}>
                              <Image src={User} alt="" width={20} height={20} />
                              <Field name="lastName" placeholder="Last name" />
                            </div>
                          </div>
                          <div className={styles.mail}>
                            <Image src={Mail} alt="" width={20} height={20} />
                            <Field name="email" placeholder="Mail" />
                          </div>
                          <div className={styles.login_info}>
                            <div className={styles.personal_detials}>
                              <Image
                                src={India}
                                alt=""
                                width={20}
                                height={20}
                              />
                              <Field
                                as="select"
                                name="category"
                                className={styles.selectContent}
                              >
                                <option
                                  value=""
                                  style={{
                                    fontFamily:
                                      "../../public/assets/fonts/Gilroy-Light.ttf",
                                  }}
                                >
                                  | INDIA (+91)
                                </option>
                                <option
                                  value="india"
                                  style={{
                                    fontFamily:
                                      "../../public/assets/fonts/Gilroy-Light.ttf",
                                  }}
                                >
                                  India
                                </option>
                              </Field>
                            </div>
                            <div className={styles.personal_detials}>
                              <Image
                                src={Phone}
                                alt=""
                                width={20}
                                height={20}
                              />
                              <Field name="number" placeholder="Phone" />
                            </div>
                          </div>
                          <h6>Optional</h6>
                          <div className={styles.login_info}>
                            <div className={styles.personal_detials}>
                              <Image
                                src={Briefcase}
                                alt=""
                                width={20}
                                height={20}
                              />
                              <Field
                                name="designation"
                                placeholder="Designation"
                              />
                            </div>
                            <div className={styles.personal_detials}>
                              <Image
                                src={Company}
                                alt=""
                                width={20}
                                height={20}
                              />
                              <Field name="company" placeholder="Company" />
                            </div>
                          </div>
                          <div className={styles.signup_btn}>
                            <Button varient="primary">
                              Schedule an appointment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advisory;
