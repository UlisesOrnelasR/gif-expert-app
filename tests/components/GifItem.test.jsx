import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebass sobre el componente <GifItem />", () => {
  const title = "Naruto";
  const url = "https://www.naruto-academy.com";
  test("Deberia de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
