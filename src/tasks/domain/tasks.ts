export class Task {
  public title: string;
  public description: string;
  public duration?: number;
  public completed: boolean;
  public assigned: string;
  createdAt: Date;

  constructor(
    title: string,
    description: string,
    duration: number | undefined,
    completed: boolean,
    assigned: string,
  ){
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.completed = completed;
    this.assigned = assigned;
    this.createdAt = new Date();
  }
}
