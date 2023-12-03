//ポケモンをまとめて取得する
export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    })
}

//個々のポケモンのデータを取得する
export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                resolve(data);
            })
    })
}