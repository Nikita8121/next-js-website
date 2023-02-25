import { Htag, Button, P, Tag, Rating, Input } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "@/helpers/api";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">HHH</Htag>
      <Button appearance="primary" arrow="down">
        Gavno
      </Button>
      <Button appearance="ghost">Gavno</Button>
      <P>DWDEW</P>
      <Tag color="primary">sdfsdf</Tag>
      <Rating isEditable setRating={setRating} rating={rating} />
      <Input />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
