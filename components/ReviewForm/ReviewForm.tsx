import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import { Input, Rating, TextArea, Button } from "..";
import CloseIcon from "./close.svg";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios, { AxiosError } from "axios";
import { API } from "@/helpers/api";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo ,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
      } else {
        setError("Что то пошло не так");
      }
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        setError(e.message);
      }
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          error={errors.name}
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
        />
        <Input
          error={errors.title}
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          placeholder="Заголовок отзывов"
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: {
                value: true,
                message: "заполните рейтинг",
              },
              min: 1,
              max: 5,
            }}
            render={({ field }) => (
              <Rating
                setRating={field.onChange}
                rating={field.value}
                isEditable={true}
                error={errors.rating}
              />
            )}
          />
        </div>
        <TextArea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button type="submit" appearance="primary">
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess ? (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div className="">
            Спасибо, ваш отзыв будет опубликован после проверки
          </div>
          <CloseIcon
            onClick={() => setIsSuccess(false)}
            className={styles.close}
          />
        </div>
      ) : null}
      {error ? (
        <div className={cn(styles.error, styles.panel)}>
          {error}
          <CloseIcon onClick={() => setError("")} className={styles.close} />
        </div>
      ) : null}
    </form>
  );
};
