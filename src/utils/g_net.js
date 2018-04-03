/**
 * Created by Administrator on 2018/3/21.
 */


export function fetchData(url) {
    // fetch(url)
    //     .then((res) => res.json())
    //     .catch((e) => console.debug(e))

    return fetch(url)
        .then((res) => res.text())
        .then((res)=>{
            let result = res.replace(");}catch(e){};","").replace("try{jsonp9(","");
            console.debug("result:"+result)
            return JSON.parse(result)
        })
        .catch((e) => console.debug(e))

}
