

let count = parseInt(localStorage.getItem("storage")) || 0;
console.log(parseInt(localStorage.getItem("storage")));

const showCount = document.getElementById('showResult');
    // console.count(count);
    showCount.innerText = count;
    
    
    document.getElementById('countBTn').addEventListener('click', () => {
        count++;
        showCount.innerText = count;
    // console.log(count);
    setLocalStorage('properties', count);
})

const getLocalStorage = () => {
    let storage = {}
    const getLocalStorage = localStorage.getItem('storage');
    if (getLocalStorage) {
        storage = JSON.parse(getLocalStorage);
    }
    return storage;
}

const setLocalStorage = (key, value) => {
    let storage = getLocalStorage();
    console.debug(storage);
    storage[key] = value;
    const stringifiedStorage = JSON.stringify(storage);
    localStorage.setItem('storage', stringifiedStorage);
}

const displayLocalStorage = () => {
    const storage = getLocalStorage();
    console.log(storage);
    for ( item in storage ) {
        const showCount = document.getElementById('showResult');
        const countItem = storage[item]
        showCount.innerText = countItem;
    }
}

displayLocalStorage();


