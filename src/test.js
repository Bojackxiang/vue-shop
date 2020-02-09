let user = {
    name: 'weijie',
    age: {
        isAdult: true,
        currentAge: 18,
    }
}

const isAdult = (key, module) => {
    if (module[key]){
        return module[key]
    }
    return isAdult(key, module)
    
}