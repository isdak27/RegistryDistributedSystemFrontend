export class Inscription {
  constructor(
    public IdAut: number = 0,
    public StudentCode: string | null = null,
    public SubjectCode: string | null = null,
    public InscriptionDate: Date ,
  ) {
  }
}
