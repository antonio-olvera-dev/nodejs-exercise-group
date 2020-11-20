import { Model, DataType, Sequelize, DataTypes } from 'sequelize';
import { database } from '../databases';
import { Provider } from './provider.model';

export class Product extends Model {
    public id!: number;
    public title!: string;
    public price!: number;
    public providerId!:number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}
,{
    tableName: 'products',
    sequelize: database
});

Product.belongsTo(Provider,{foreignKey: 'providerId'}); 
Provider.hasMany(Product);