export class Subject {
  constructor(
    public Title: string | null = null,
    public Quotas: number,
    public ActualStatus: string | null = null,
    ) {
    }
}
