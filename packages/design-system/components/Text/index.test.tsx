import { Text } from "./index";
import { customRender } from "@eduardofl/test-commons/react-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("should render h1 tag", () => {
    const { container } = render(<Text tag="h1">Hello World!</Text>);

    expect(container).toMatchSnapshot();
  });
});
