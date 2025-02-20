function Model(model_No) {
    this.model_No = model_No;
    this.color="red"
}
var samsung=new Model("galary")
for(var props in samsung)
{
    console.log(props +":" +samsung[props]);
}