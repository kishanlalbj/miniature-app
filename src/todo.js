
var todoController = (function () {
    var x = 23

    var add = function (a) {
        return x + a
    }

    return {
        pubilcAdd: add
    }
})()

var UIController = (function () {

})()


var controller = (function (todoCtl, UIctl) {
    var sum = todoCtl.pubilcAdd(9)

    return {
        anotherPublic: function () {
            console.log(sum)
        }
    }
})(todoController, UIController)