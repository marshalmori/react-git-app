import { getGifs } from "../../helpers/getGifs";

describe("Testes com getGifs Fecth", () => {
  test("Deve trazer 10 elementos", async () => {
    const gifs = await getGifs("Iron Man");
    expect(gifs.length).toBe(10);
  });

  test("Deve trazer um array vazio", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
