import { Meta, StoryObj } from "@storybook/react";
import React, {
  ComponentType,
  lazy,
  ReactNode,
  Suspense,
  useState,
} from "react";
import { List } from "../../src";
import { Facebook } from "react-content-loader";

export default {
  component: List,
} as Meta;

const Skeleton = () => {
  return <Facebook />;
};

const Loaded = () => {
  return <div style={{ width: "100%", height: "100%" }}>loaded</div>;
};

const Item = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      padding: 10,
      height: 300,
      borderBottom: "solid 1px #ccc",
      background: "#fff",
    }}
  >
    {children}
  </div>
);

export const Default: StoryObj = {
  name: "Lazy",
  render: () => {
    const heavyComps = useState(() =>
      Array.from({ length: 1000 }, () =>
        lazy(
          () =>
            new Promise<{ default: ComponentType }>(async (resolve) => {
              await new Promise((res) => setTimeout(res, 1000));
              resolve({ default: Loaded });
            })
        )
      )
    )[0];

    return (
      <List style={{ height: "100vh" }}>
        {heavyComps.map((HeavyComp, i) => (
          <Item key={i}>
            <Suspense fallback={<Skeleton />}>
              <HeavyComp />
            </Suspense>
          </Item>
        ))}
      </List>
    );
  },
};
