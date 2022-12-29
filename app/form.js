class Form{
    form;
    result;
    urlPhp;
    values;
    body;
    fields;
    textDb;


    constructor(){
        this.form = document.querySelector(".form");
        this.result = document.getElementById("submit");
        this.dB = document.getElementById("myTable");
        this.urlPhp = "app.php";
    }

    ajax(bodyResponse,ContentType,url){
        async function getDate(bodyResponse,ContentType){
            let response = await fetch(url,{
                method: "POST",
                headers: {
                  "Content-Type": ContentType
                },
                body: bodyResponse
            });
            let result = await response.json();
            console.log(result);
        }

        console.log(getDate(bodyResponse,ContentType));
    }


    responseCallBack(event){
        this.fields = document.querySelectorAll("input");
        this.values = {};
        this.fields.forEach(field => {
            const {name,value} = field;
            this.values[name] = value;
        });

        this.body = [];
        for(let property in this.values){
            let encodeKey = encodeURIComponent(property);
            let encodeValue = encodeURIComponent(this.values[property]);
            this.body.push(encodeKey + "=" + encodeValue);
        }
        this.body = this.body.join("&");
        this.ajax(this.body,"application/x-www-form-urlencoded","app.php");
    }
    callBack(){
        this.textDb = [];
        this.ajax(JSON.stringify(this.textDb),"application/x-www-form-urlencoded","textDate.php");
    }

    responseData(){
    this.result.addEventListener("click", () =>{
        this.responseCallBack();
    });
    }

    newResponse(){
        this.result.addEventListener("click",() =>{
            this.callBack();
        });
    }
}