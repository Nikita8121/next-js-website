import { Htag, Button, P, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";

function Home() {
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
    </>
  );
}

export default withLayout(Home);
