module.exports.generateQuery = (type, tableName, options) => {
  let query = {};

  switch (type) {
    case 'select': {
      query = {
        sql: buildSelectQuery(tableName, options.conditions),
        values: Object.values(options.conditions),
      };

      break;
    }
    case 'insert': {
      query = {
        sql: buildInsertQuery(tableName, options.entity),
        values: Object.values(options.entity),
      };

      break;
    }
    case 'update': {
      break;
    }
    case 'delete': {
      break;
    }
  }

  return query;
};

function buildSelectQuery(tableName, conditions) {
  let whereConditions = '';

  if (conditions) {
    let columns = Object.keys(conditions).toString();
    whereConditions = `where ${columns.replace(/,/g, ' = ? and ')} = ?`;
  }

  const params = Object.keys(conditions)
    .map(() => '?')
    .toString();

  return `select * from ${tableName} ${whereConditions}`;
}

function buildInsertQuery(tableName, entity) {
  const columns = Object.keys(entity).toString();
  const params = Object.keys(entity)
    .map(() => '?')
    .toString();

  return `insert into ${tableName}(${columns}) values(${params})`;
}


