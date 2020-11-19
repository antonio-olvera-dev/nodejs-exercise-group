import { Model, DataType, Sequelize, DataTypes } from 'sequelize';
import { database } from '../databases';

export class Provider extends Model {
    public id!: number;
    public slName!: string;
    public email!: string;
    public phone!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Provider.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    slName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
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
}, {
    tableName: 'providers',
    sequelize: database
});