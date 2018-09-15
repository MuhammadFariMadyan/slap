import React from "react";
import { storiesOf, action } from "@storybook/react";

import SmallButton from "../SmallButton";

storiesOf("SmallButton", module).add("default", () => (
  <SmallButton caption="My Button" onClick={action("clicked")} />
));
