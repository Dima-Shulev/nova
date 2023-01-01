class Form{
    form;
    result;
    urlPhp;
    values;
    body;
    fields;
    table;
    tr;

    constructor(){
        this.form = document.querySelector(".form");
        this.result = document.getElementById("submit");
        this.urlPhp = "app.php";
    }

    ajax(contentType,url,bodyRes= null){
           fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": contentType
                },
                body: bodyRes
            })
                .then(response => response.json())
                .then(result => this.tableCreat(result))

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
        this.ajax("application/x-www-form-urlencoded","app.php",this.body);

    }

    CallBack(){
        this.ajax("application/x-www-form-urlencoded","textDate.php");

    }
    tableCreat(bodyArray){
       this.table = document.getElementById("table");
            for (let key in bodyArray) {
                this.tr = document.createElement("tr");
                for (let value in bodyArray[key]) {
                    this.td = document.createElement("td");
                    this.td.innerText = bodyArray[key][value];
                    this.tr.append(this.td);
                    this.table.append(this.tr);
                }
           }

    }

    responseData(){
    this.result.addEventListener("click", () =>{
        this.responseCallBack();
    });
    }
}