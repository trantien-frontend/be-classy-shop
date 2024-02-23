import * as React from "react";
import { Header } from "../components";

export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps) {
  return (
    <>
      <Header />
      <section>
        <h3>404 NOT FOUND</h3>
      </section>
    </>
  );
}
