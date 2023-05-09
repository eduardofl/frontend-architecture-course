import { HomeScreen } from "./HomeScreen";
import { customRender } from "@eduardofl/test-commons/react-testing-library";

function CustomWrapper({ children }) {
  return <section>{children}</section>;
}

const render = customRender(CustomWrapper);

describe("<HomeScreen />", () => {
  it("should render the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
