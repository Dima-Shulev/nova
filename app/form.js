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

    ajax(ContentType,url,bodyResponse=null){
        async function getDate(ContentType,bodyResponse=null){
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

        console.log(getDate(ContentType,bodyResponse));
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

    tableCreat(bodyArray){
        this.table = document.createElement("table");
        this.table.className = "myTable";
        document.body.append(this.table);
        this.tr = document.createElement("tr");
        for(let i = 0; i < bodyArray.length; i++){
            this.td = document.createElement("td");
            this.td.innerText = bodyArray[i];
            this.tr.append(this.td);
        }
        this.table.append(this.tr);
    }

    CallBack(event){
        this.ajax("application/x-www-form-urlencoded","textDate.php",this.body);
        this.tableCreat(this.body);
    }


    responseData(){
    this.result.addEventListener("click", () =>{
        this.responseCallBack();
    });
    }

    newResponse(){
        this.result.addEventListener("click", () =>{
            this.CallBack();
        });
    }
}
