import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { funAction } from "../../redux/actions";
import { Card } from "antd";
import { getFunCharacters } from "../../redux/selectors";

const { Meta } = Card;

export default function FunPage() {
  const characters = useSelector(getFunCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(funAction());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {characters.map(({ name, image, id, species }) => (
        <Card
          key={id}
          hoverable
          style={{ width: 240, margin: "10px" }}
          cover={<img alt={name} src={image} />}
        >
          <Meta title={name} description={species} />
        </Card>
      ))}
    </div>
  );
}
