import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({ type: DataType.STRING(60), allowNull: false })
  code: string;

  @Column({ type: DataType.STRING(60), allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;
}
