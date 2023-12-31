import { Model, DataTypes } from "sequelize";

export default class Users extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                type: {
                    type: DataTypes.STRING,
                    defaultValue: "local",
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                nickName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                imgUrl: {
                    type: DataTypes.STRING,
                    defaultValue: "https://chapter3-team.s3.ap-northeast-2.amazonaws.com/userprofile/0_.png",
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                refreshToken: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: "refresh",
                }
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: "Users",
                tableName: "users",
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
        );
    }

    static associate(db) {
        db.Users.hasMany(db.Post, { foreignKey: "userId", sourceKey: "id" });
        db.Users.hasMany(db.Comments, {
            foreignKey: "userId",
            sourceKey: "id",
        });
        db.Users.hasMany(db.Follow, {
            foreignKey: "followrId",
            sourceKey: "id",
        });
        db.Users.hasMany(db.Follow, {
            foreignKey: "followedId",
            sourceKey: "id",
        });
        db.Users.hasMany(db.Likes, {
            foreignKey: "userId",
            sourceKey: "id",
        });
    }
}
