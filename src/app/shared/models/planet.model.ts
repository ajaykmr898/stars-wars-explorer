export class Planet {
  name: string;
  terrain: string;
  population: number;
  url: string;
  title = () => this.name;
}
