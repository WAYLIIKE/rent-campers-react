import css from './FeaturesForm.module.css';

export const FeaturesForm = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={css.input}
          type="date"
          name="date"
          placeholder="Booking date"
        />
        <textarea
          className={css.comment}
          type="text"
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button className={css.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
