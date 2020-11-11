
export function changeSelect(){
    

    const selectElement = document.querySelector('.select_country');
    selectElement.style.opacity = "0.7";
    selectElement.addEventListener("change", ()=>{
        selectElement.style.borderColor = "#6f2c91";
        selectElement.style.opacity = "1";
        selectElement.style.color = "#6f2c91";
    })
}