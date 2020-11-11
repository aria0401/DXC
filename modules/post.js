// import { key } from "./config";
import * as config from "./config";

export function post(data, callback){

    const postData = JSON.stringify(data);
    fetch(config.endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": config.key,
        "cache-control": "no-cache"
      },
      body: postData,
    })
      .then(res => res.json())
      .then(callback);
  }