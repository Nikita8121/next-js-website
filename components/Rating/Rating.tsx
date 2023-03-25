import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";
import { RatingProps } from "./Rating.props";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  error,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) return;
    if (e.code === "ArrowRight" || e.code === "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
    }
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.isEditable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          onKeyDown={handleKey}
          tabIndex={isEditable ? 0 : -1}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  return (
    <div {...props} style={{ position: "relative" }}>
      <div className={styles.wrapper}>
        {ratingArray.map((r: JSX.Element, i: number) => {
          return <span key={i.toString()}>{r}</span>;
        })}
      </div>
      {error ? (
        <span className={styles.errorMessage}>{error.message}</span>
      ) : null}
    </div>
  );
};
