//import * as config from "./modules/config";
// post(config.endpoint, prepareData);
import { post } from "./modules/post";
import {changeSelect} from "./modules/changeSelect";


function prepareData(){

    const form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const myData = {
            first_name: form.elements.first_name.value,
            last_name:form.elements.last_name.value,
            email:form.elements.email.value,
            company:form.elements.company.value,
            country:form.elements.country.value,
            job_title:form.elements.job_title.value,
        };
        console.log("myData is:", myData);
        post(myData, ()=>{
            window.location= "asset.html";
        });
    })


}

changeSelect();
prepareData();