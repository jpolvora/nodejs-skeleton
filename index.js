process.env.NODE_ENV === 'production'
    ? require('./dist')
    : require('./src')
