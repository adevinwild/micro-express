import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Dummy {
    @PrimaryColumn()
    id: string;
}
