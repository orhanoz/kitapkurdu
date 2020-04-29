/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comment', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		username: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		bookId: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		comment: {
			type: DataTypes.STRING(1000),
			allowNull: true
		},
		rating: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		bookName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		author: {
			type: DataTypes.STRING(10000),
			allowNull: true
		},
		selflink: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		imageLink: {
			type: DataTypes.STRING(10000),
			allowNull: true
		},
		created: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'comment',
		timestamps: false
	});
};
