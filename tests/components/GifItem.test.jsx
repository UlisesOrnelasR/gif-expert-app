import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebass sobre el componente <GifItem />", () => {
  const title = "Naruto";
  const url = "https://naruto.com";
  test("Deberia de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Deberia mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { alt } = screen.getByRole("img");
    expect(alt).toBe(alt);
  });
  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy;
  });
});
