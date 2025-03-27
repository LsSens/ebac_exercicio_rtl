import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve permitir a inserção de dois comentários", () => {
    render(<PostComment />);

    const textarea = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /comentar/i });

    fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
