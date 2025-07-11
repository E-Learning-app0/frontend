import { useState } from 'react';
import Image from './../../Assets/Studying.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Title } from '../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  };

  Title('Taalam | Sign Up');

  const { t } = useTranslation();

  return (
    <>
      <div name="Sign-up">
        <div className="container">
          <div className="flex flex-col items-center lg:flex-row justify-between my-12 p-12 rounded-2xl loginShadow">
            <LazyLoadImage
              src={Image}
              className="lg:w-1/2 sm:block hidden"
              alt="Sign Up"
            />
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0 rtl:lg:pr-20 ltr:lg:pl-20 directionLeft">
              <h1 className="">
                {t('welcome_to')}{' '}
                <span className="text-second-color font-semibold">
                  {t('header_title')}
                </span>
              </h1>
              <div className="mt-8">
                <div className="mb-8">
                  <h6 className="font-semibold">{t('create_account')}</h6>
                  <p className="text-sm">{t('signup_paragraph')}</p>
                </div>
                <form>
                  <div>
                    <label htmlFor="email">{t('email')}</label> <br />
                    <input
                      className="w-3/4 md:w-full"
                      type="email"
                      name="email"
                      placeholder={t('email')}
                    />
                  </div>
                  <div className="my-4">
                    <label htmlFor="password">{t('password')}</label>{' '}
                    <div className="flex items-center">
                      <input
                        className="w-3/4 md:w-full"
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        placeholder={t('password')}
                      />
                      <AiOutlineEye
                        onClick={showPassword}
                        className="cursor-pointer text-xl"
                      />{' '}
                      <br />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password">{t('confirm_password')}</label>
                    <br />
                    <input
                      className="w-3/4 md:w-full"
                      type="password"
                      name="confirm password"
                      placeholder={t('confirm_password')}
                    />
                  </div>
                </form>
                <div>
                  <a href="#">
                    <button className="w-full" type="submit">
                      {t('Sign-up_nav')}
                    </button>
                  </a>
                </div>

                <div className="text-center mt-4">
                  <p>
                    {t('have_account')}{' '}
                    <Link className="font-semibold ml-2" to="/Login">
                      {t('login_nav')}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
