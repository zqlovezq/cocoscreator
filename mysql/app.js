var EventUtil = {
    addHandler:function(element,type,handler){
        //todo
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    removeHandler:function(element,type,handler){
        //    todo
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
};
// var item1 =document.getElementById("goSomewhere");
// var item2 =document.getElementById("doSomething");
// var item3 =document.getElementById("sayHi");
// EventUtil.addHandler(item1,"click",function(event){
//     location.href = "http://www.wrox.com";
// })
// EventUtil.addHandler(item2,"click",function (event) {
//     document.title ="I change the document's title";
// });
// EventUtil.addHandler(item3,"click",function (event) {
//     alert("hi");
// })
var list = document.getElementById("myLinks");
EventUtil.addHandler(list,"click",function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    switch (target.id){
        case "doSomething":
            document.title="I change the document's title";
            break;
        case "goSomewhere":
            location.href="http://www.baidu.com";
            break;
        case "sayHi":
            alert("hi");
            break;
    }
});