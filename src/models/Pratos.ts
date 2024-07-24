class Prato {
  tags: string[];
  image: string;
  nota: string;
  name: string;
  id: number;
  description: string;
  btn: string;

  constructor(
    tags: string[],
    image: string,
    nota: string,
    name: string,
    id: number,
    description: string,
    btn: string,
  ) {
    this.image = image;
    this.name = name;
    this.nota = nota;
    this.tags = tags;
    this.id = id;
    this.description = description;
    this.btn = btn;
  }
}

export default Prato;
