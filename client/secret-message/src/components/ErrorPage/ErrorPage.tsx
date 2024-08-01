import style from "./ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <section>
      <div className={style.errorPageContainer}>
        <h1 className={style.errorMessage}>
          Something went wrong, please try again later 
        </h1>
      </div>
    </section>
  );
};

export default ErrorPage;
