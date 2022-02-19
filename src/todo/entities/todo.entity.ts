export class Todo {
  constructor(
    public id: number = null,
    public title: string = '',
    public description: string = '',
    public creationDate: Date = new Date(),
  ) {}
}
